import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import { FlashList } from '@shopify/flash-list';
import { Pressable, Text, View } from 'react-native';
import { AppHeader } from '@/components/navigation/AppHeader';
import { recipeService } from '@/services/recipeService';
import { useUiStore } from '@/store/useUiStore';

export default function Discover() {
  const { data = [] } = useQuery({ queryKey: ['recipes'], queryFn: recipeService.list });
  const { activeDiscoverFilter, setActiveDiscoverFilter } = useUiStore();
  return <View style={{ flex: 1 }}>
    <AppHeader title="EPICUREAN" />
    <FlashList data={data.filter((r)=>activeDiscoverFilter==='Popular' || r.tags.includes(activeDiscoverFilter))} estimatedItemSize={120}
      ListHeaderComponent={<View style={{ flexDirection: 'row', gap: 8, padding: 16 }}><Pressable onPress={()=>setActiveDiscoverFilter('Popular')}><Text>Popular Now</Text></Pressable><Pressable onPress={()=>setActiveDiscoverFilter('Viral')}><Text>Viral Flavors</Text></Pressable><Pressable onPress={()=>router.push('/menu')}><Text>Menu</Text></Pressable></View>}
      renderItem={({ item }) => <Pressable onPress={() => router.push(`/recipe/${item.id}`)} style={{ padding: 16 }}><Text>{item.title}</Text><Pressable onPress={() => router.push(`/creator/${item.creatorId}`)}><Text>Creator</Text></Pressable></Pressable>} />
  </View>;
}
