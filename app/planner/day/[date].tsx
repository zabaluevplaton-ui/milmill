import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { usePlannerStore } from '@/store/usePlannerStore';

export default function PlannerDay() {
  const { date, recipeId } = useLocalSearchParams<{date:string; recipeId?:string}>();
  const { week, addMeal } = usePlannerStore();
  const day = week.days.find((d)=>d.date===date)!;
  return <View style={{flex:1,padding:16,gap:12}}><Text>{date}</Text>
    {day.slots.map((s)=><Text key={s.id}>{s.mealType}: {s.recipeId || 'Empty'}</Text>)}
    {!!recipeId && <Text onPress={()=>addMeal(date,'dinner',recipeId)}>Attach recipe to dinner</Text>}
    <Text>Treat Day toggle available in Preferences</Text>
  </View>;
}
