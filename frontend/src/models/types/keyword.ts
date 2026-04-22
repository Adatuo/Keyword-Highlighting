import { KeywordUser } from "./user";

export interface KeywordItem {
    id: string;
    listId: string;
    text: string;
    color?: string;
    enabled: boolean;
    createdAt: number;
    updatedAt: number;
}

export interface KeywordList {
    id: string;
    dataId: string;
    name: string;
    description?: string;
    enabled: boolean;
    createdAt: number;
    updatedAt: number;
}

export interface KeywordData {
    id: string;
    name: string;
    description?: string;
    enabled: boolean;
    createdAt: number;
    updatedAt: number;
}

export interface KeywordInformation {
    user?: KeywordUser;
    version: string;
    isOnline: boolean;
    // 当前激活的词库和词表数据id
    activeDataId?: string;
    activeListId?: string;
    //   这里分开便于后面的数据库查询和在线词库的扩展
    datas: KeywordData[];
    lists: KeywordList[];
    items: KeywordItem[];
}

// 这里是一个用于构建树形结构的函数
export interface KeywordListDetail extends KeywordList {
  keywordItem: KeywordItem[];
}

export interface KeywordDataDetail extends KeywordData {
  keywordList: KeywordListDetail[];
}