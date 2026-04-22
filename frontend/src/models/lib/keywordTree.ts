import type {
  KeywordData,
  KeywordDataDetail,
  KeywordItem,
  KeywordList,
  KeywordListDetail,
} from '@/models/types/keyword';

export function buildKeywordDataTree(
  datas: KeywordData[],
  lists: KeywordList[],
  items: KeywordItem[],
): KeywordDataDetail[] {
  return datas.map((data) => {
    const dataLists: KeywordListDetail[] = lists
      .filter((list) => list.dataId === data.id)
      .map((list) => ({
        ...list,
        keywordItem: items.filter((item) => item.listId === list.id),
      }));

    return {
      ...data,
      keywordList: dataLists,
    };
  });
}