import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from '@/components/ui/combobox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import type { KeywordDataDetail } from '@/models/types/keyword';

interface KeyWordBankDataSettingProps {
  keywordTree: KeywordDataDetail[];
  activeData: KeywordDataDetail | null;
}

export default function KeyWordBankDataSetting({ keywordTree, activeData }: KeyWordBankDataSettingProps) {
  // 将树形数据转换为 Combobox 需要的分组格式
  const comboboxItems = keywordTree.map((data) => ({
    value: data.name,
    items: data.keywordList.map((list) => list.name),
  }));

  return (
    <div className="flex items-center justify-between">
      <div className=''>
        <Combobox items={comboboxItems}>
          <ComboboxInput placeholder={activeData ? activeData.name : "选择词库"} />
          <ComboboxContent>
            <ComboboxEmpty>未找到词库</ComboboxEmpty>
            <ComboboxList>
              {(group, index) => (
                <>
                  <ComboboxGroup key={group.value} items={group.items}>
                    <ComboboxLabel>{group.value}</ComboboxLabel>
                    <ComboboxCollection>
                      {(item) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxCollection>
                    {index < comboboxItems.length - 1 && <ComboboxSeparator />}
                  </ComboboxGroup>
                </>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div className=''>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              title="添加新的高亮词组"
            >
              <Plus />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                添加词库
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                添加词组
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
