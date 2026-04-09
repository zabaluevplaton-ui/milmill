import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useCartStore } from '@/store/useCartStore';

export default function ShoppingList() {
  const { items, toggleCheck } = useCartStore();
  return <View style={{flex:1,padding:16,gap:8}}><Text>Weekly Shopping List</Text>
    {items.map((i)=><Text key={i.id} onPress={()=>toggleCheck(i.id)}>{i.checked?'✅':'⬜️'} {i.ingredientName} {i.quantity}{i.unit}</Text>)}
    <Text onPress={()=>router.push('/cart')}>Send all to Smart Cart</Text>
  </View>;
}
