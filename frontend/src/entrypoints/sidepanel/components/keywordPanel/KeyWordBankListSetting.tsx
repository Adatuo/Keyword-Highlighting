import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import type { KeywordDataDetail, KeywordListDetail } from '@/models/types/keyword'

interface KeyWordBankListSettingProps {
    activeData: KeywordDataDetail | null;
    activeList: KeywordListDetail | null;
}

export default function KeyWordBankListSetting({ activeData, activeList }: KeyWordBankListSettingProps) {
    if (!activeData) {
        return <div className="text-muted-foreground text-sm p-4">请先选择一个词库</div>
    }

    return (
        <Accordion
            type="single"
            collapsible
            className="rounded-lg border"
            defaultValue={activeList?.id}
        >
            {activeData.keywordList.map((list) => (
                <AccordionItem
                    key={list.id}
                    value={list.id}
                    className="border-b px-4 last:border-b-0"
                >
                    <AccordionTrigger className="flex items-center">
                        <Input type="text" defaultValue={list.name} className="border-none shadow-none" />
                    </AccordionTrigger>
                    <AccordionContent>
                        {/* 颜色选择组件 */}
                        <Input type="color" />
                    </AccordionContent>
                    <AccordionContent>
                        <Textarea
                            placeholder="请填入词组，用回车或者空格隔开"
                            defaultValue={list.keywordItem.map((item) => item.text).join(' ')}
                        />
                    </AccordionContent>
                    <AccordionContent>
                        <div className="flex justify-end gap-2">
                            <Button>保存</Button>
                            <Button variant="outline">取消</Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}