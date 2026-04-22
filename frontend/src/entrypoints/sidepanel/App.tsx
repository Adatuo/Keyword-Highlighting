import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KeywordPanel from './components/keywordPanel/keywordPanel';


function App() {
  return (
    <div className="p-4">
      <Tabs defaultValue="local" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="local">本地词库</TabsTrigger>
          <TabsTrigger value="online">在线词库</TabsTrigger>
        </TabsList>
        <TabsContent value="local">
          <KeywordPanel/>
        </TabsContent>
        <TabsContent value="online">在线词库</TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
