import type {
  KeywordData,
  KeywordInformation,
  KeywordItem,
  KeywordList,
} from '@/models/types/keyword';

function parseEnvJson<T>(value: string | undefined, fallback: T): T {
  if (!value) return fallback;

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

const emptyDatas: KeywordData[] = [];
const emptyLists: KeywordList[] = [];
const emptyItems: KeywordItem[] = [];

const envDatas = parseEnvJson<KeywordData[]>(import.meta.env.VITE_KEYWORD_DATAS, emptyDatas);
const envLists = parseEnvJson<KeywordList[]>(import.meta.env.VITE_KEYWORD_LISTS, emptyLists);
const envItems = parseEnvJson<KeywordItem[]>(import.meta.env.VITE_KEYWORD_ITEMS, emptyItems);

export const sampleKeywordInformation: KeywordInformation = {
  version: import.meta.env.VITE_KEYWORD_VERSION ?? '1.0.0',
  isOnline: false,
  activeDataId: import.meta.env.VITE_KEYWORD_ACTIVE_DATA_ID,
  activeListId: import.meta.env.VITE_KEYWORD_ACTIVE_LIST_ID,
  datas: envDatas,
  lists: envLists,
  items: envItems,
};
