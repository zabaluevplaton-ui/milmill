import { useEffect } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { Text, View } from 'react-native';
import { recipes } from '@/store/useRecipesStore';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useCartStore } from '@/store/useCartStore';
import { useRecipesStore } from '@/store/useRecipesStore';
import { useCreatorsStore } from '@/store/useCreatorsStore';

export default function RecipeDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === id);
  const { addIngredients } = useCartStore();
  const { toggleSave, addRecent } = useRecipesStore();
  const { toggleFollow } = useCreatorsStore();

  useEffect(() => {
    if (recipe?.id) addRecent(recipe.id);
  }, [recipe?.id]);

  if (!recipe) {
    return <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text>Recipe not found</Text>
      <PrimaryButton label="Back to Discover" onPress={() => router.replace('/(tabs)/discover')} />
    </View>;
  }

  return <View style={{ flex: 1, padding: 16, gap: 12 }}>
    <Text onPress={() => router.back()}>Back</Text>
    <Text>{recipe.title}</Text>
    <Text>{recipe.kcal} kcal • {recipe.protein}g protein</Text>
    {recipe.steps.map((s, i) => <Text key={s}>{i + 1}. {s}</Text>)}
    <PrimaryButton label="Add to Cart" onPress={() => addIngredients(recipe.ingredients)} />
    <PrimaryButton label="Add to Planner" onPress={() => router.push(`/planner/day/2026-04-07?recipeId=${recipe.id}`)} />
    <PrimaryButton label="Save Recipe" onPress={() => toggleSave(recipe.id)} />
    <PrimaryButton label="Follow Creator" onPress={() => toggleFollow(recipe.creatorId)} />
    <PrimaryButton label="Chef Chat" onPress={() => router.push('/chef-chat')} />
  </View>;
}
