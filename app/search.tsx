import { useEffect, useRef, useState } from 'react';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useSearchStore } from '@/store/useSearchStore';
import { searchService } from '@/services/searchService';

export default function SearchScreen() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { query, setQuery, results, setResults, recent, pushRecent } = useSearchStore();
  const [trending, setTrending] = useState<string[]>([]);

  useEffect(() => {
    searchService.trending().then(setTrending);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      setResults(query ? await searchService.search(query) : []);
    }, 300);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [query]);

  return <View style={{ flex: 1, padding: 16, gap: 10 }}>
    <TextInput value={query} onChangeText={setQuery} placeholder="Search recipes, chefs..." style={{ borderWidth: 1, padding: 12, borderRadius: 12 }} />
    <Text>Recent</Text>
    {recent.map((r) => <Text key={r}>{r}</Text>)}
    <Text>Trending</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {trending.map((t) => <Pressable key={t} onPress={() => setQuery(t)}><Text>{t}</Text></Pressable>)}
    </View>
    {results.map((r) => <Pressable key={r.id} onPress={() => { pushRecent(query); router.push(r.route as any); }}><Text>{r.title} {r.subtitle}</Text></Pressable>)}
  </View>;
}
