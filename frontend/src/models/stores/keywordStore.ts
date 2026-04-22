import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { buildKeywordDataTree } from '@/models/lib/keywordTree';
import { sampleKeywordInformation } from '@/models/mocks/keywordSample';
import type { KeywordInformation } from '@/models/types/keyword';

export const useKeyWordData = create(
  combine(
    {
      keywordInformation: sampleKeywordInformation,
    },
    (set, get) => ({
      initData: async () => {
        const result = (await browser.storage.local.get('keywordInformation')) as {
          keywordInformation?: KeywordInformation;
        };
        const keywordInformation: KeywordInformation =
          result.keywordInformation ?? sampleKeywordInformation;
        set({ keywordInformation });
        return keywordInformation;
      },
      updateKeywordInformation: async (keywordInformation: KeywordInformation) => {
        await browser.storage.local.set({ keywordInformation });
        set({ keywordInformation });
      },
      getKeywordTree: () => {
        const { keywordInformation } = get();
        return buildKeywordDataTree(
          keywordInformation.datas,
          keywordInformation.lists,
          keywordInformation.items,
        );
      },
    }),
  ),
);
