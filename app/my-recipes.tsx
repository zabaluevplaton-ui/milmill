import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { recipes, useRecipesStore } from '@/store/useRecipesStore';

export default function MyRecipes() {
  const { savedIds, recentIds } = useRecipesStore();
  const saved = recipes.filter((r)=>savedIds.includes(r.id));
  return <View style={{flex:1,padding:16,gap:8}}><Text>My Recipes</Text>
    <Text>Favorites</Text>{saved.map((r)=><Text key={r.id} onPress={()=>router.push(`/recipe/${r.id}`)}>{r.title}</Text>)}
    <Text>Recently Viewed</Text>{recentIds.map((id)=><Text key={id}>{id}</Text>)}
    <Text onPress={()=>router.push('/collections/default')}>Open Collection</Text>
  </View>;
}
