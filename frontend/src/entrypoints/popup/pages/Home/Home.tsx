import { CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { openSidePanel } from "@/lib/browser"
function Home() {
    return <>
        <div className="w-[250px] h-auto flex flex-col items-center">
            <div className="w-full">
                <CardTitle className="flex w-full items-center justify-center relative">
                    <Badge variant="highting" className="cursor-pointer">Keyword Highlighter</Badge>
                    <span className="absolute right-2">
                        ⚙ v0.0.1
                    </span>
                </CardTitle>
            </div>
            <Separator />
            <div className="">
                <div>
                    统计：
                </div>
                <div>
                    当前页面命中：*次
                </div>
            </div>
            <Separator />
            <div>
                正在运行的词库
            </div>
            <Separator />
            <div className="w-full">
                <Button variant="outline" className="w-full" onClick={() => openSidePanel()}>进入词库管理侧边栏</Button>
            </div>
        </div>
    </>;
}

export default Home;
