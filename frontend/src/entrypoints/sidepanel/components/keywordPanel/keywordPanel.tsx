import { useKeyWordData } from '@/models/stores/keywordStore'
import KeyWordBankDataSetting from './KeyWordBankDataSetting'
import KeyWordBankListSetting from './KeyWordBankListSetting'
import type { KeywordDataDetail, KeywordListDetail } from '@/models/types/keyword'
import { useEffect, useMemo } from 'react'

export default function KeywordPanel() {
  const initData = useKeyWordData((state) => state.initData)
  const getKeywordTree = useKeyWordData((state) => state.getKeywordTree)
  const keywordInformation = useKeyWordData((state) => state.keywordInformation)

  useEffect(() => {
    initData()
  }, [initData])

  // 派生树形数据
  const keywordTree = useMemo(() => getKeywordTree(), [getKeywordTree])

  // 当前激活的词库
  const activeData: KeywordDataDetail | null = useMemo(() => {
    return keywordTree.find((d) => d.id === keywordInformation.activeDataId) ?? null
  }, [keywordTree, keywordInformation.activeDataId])

  // 当前激活的词表
  const activeList: KeywordListDetail | null = useMemo(() => {
    if (!activeData) return null
    return activeData.keywordList.find((l) => l.id === keywordInformation.activeListId) ?? null
  }, [activeData, keywordInformation.activeListId])

  return (
    <div className="flex flex-col gap-2">
      <KeyWordBankDataSetting
        keywordTree={keywordTree}
        activeData={activeData}
      />
      <KeyWordBankListSetting
        activeData={activeData}
        activeList={activeList}
      />
    </div>
  )
}