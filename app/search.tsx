import { useEffect } from 'react';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useSearchStore } from '@/store/useSearchStore';
import { searchService } from '@/services/searchService';

let t: any;
export default function SearchScreen() {
  const { query, setQuery, results, setResults, recent, pushRecent } = useSearchStore();
  useEffect(() => { clearTimeout(t); t = setTimeout(async()=>setResults(query ? await searchService.search(query) : []), 300); return ()=>clearTimeout(t); }, [query]);
  return <View style={{ flex:1, padding:16, gap:10 }}>
    <TextInput value={query} onChangeText={setQuery} placeholder="Search recipes, chefs..." style={{borderWidth:1,padding:12,borderRadius:12}} />
    <Text>Recent</Text>{recent.map((r)=><Text key={r}>{r}</Text>)}
    {results.map((r)=><Pressable key={r.id} onPress={()=>{pushRecent(query); router.push(r.route as any);}}><Text>{r.title} {r.subtitle}</Text></Pressable>)}
  </View>;
}
