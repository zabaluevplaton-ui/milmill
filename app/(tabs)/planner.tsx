import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { usePlannerStore } from '@/store/usePlannerStore';
import { PrimaryButton } from '@/components/ui/PrimaryButton';

export default function Planner() {
  const { week, selectedDate, setSelectedDate } = usePlannerStore();
  return <View style={{flex:1,padding:16,gap:12}}>
    <Text>Meal Planner</Text>
    <ScrollView horizontal>{week.days.map((d)=><Text key={d.date} onPress={()=>setSelectedDate(d.date)} style={{marginRight:12, padding:8, backgroundColor:selectedDate===d.date?'#ffd8d3':'#eee'}}>{d.date.slice(8)}</Text>)}</ScrollView>
    <PrimaryButton label="Plan Dinner" onPress={()=>router.push(`/planner/day/${selectedDate}`)} />
    <PrimaryButton label="Shopping List" onPress={()=>router.push('/shopping-list')} />
  </View>;
}
