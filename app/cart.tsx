import { Text, View } from 'react-native';
import { useCartStore } from '@/store/useCartStore';

export default function Cart() {
  const { items, optimize, quotes, selectProvider, provider } = useCartStore();
  return <View style={{flex:1,padding:16,gap:10}}>
    <Text>Smart AI Cart</Text>
    {items.map((i)=><Text key={i.id}>{i.ingredientName}: {i.quantity}{i.unit} (pantry {i.pantryMatchQty})</Text>)}
    <Text onPress={optimize}>Compare Providers</Text>
    {quotes.map((q)=><Text key={q.provider} onPress={()=>selectProvider(q.provider)}>{q.provider} ${q.total.toFixed(2)} ETA {q.etaMin}m</Text>)}
    <Text>Selected: {provider}</Text>
  </View>;
}
