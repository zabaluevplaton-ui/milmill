import { router } from 'expo-router';
import { FlashList } from '@shopify/flash-list';
import { Pressable, Text, View } from 'react-native';
import { videos } from '@/services/mockData';
import { useUiStore } from '@/store/useUiStore';

export default function VideoScreen() {
  const { setVideoIndex } = useUiStore();
  return <View style={{ flex:1, backgroundColor:'#111' }}>
    <FlashList data={videos} pagingEnabled estimatedItemSize={700} onMomentumScrollEnd={(e)=>setVideoIndex(Math.round(e.nativeEvent.contentOffset.y/700))}
      renderItem={({ item, index }) => <Pressable onPress={() => router.push(`/recipe/${item.recipeId}`)} style={{ height: 700, padding: 24, justifyContent: 'flex-end' }}><Text style={{color:'#fff'}}>{item.title}</Text><Pressable onPress={()=>router.push(`/creator/${item.creatorId}`)}><Text style={{color:'#fff'}}>Creator</Text></Pressable><Text style={{color:'#fff'}} onPress={()=>setVideoIndex(index)}>Like Save Follow</Text></Pressable>} />
  </View>;
}
