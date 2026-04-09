import { Text, View } from 'react-native';
import { usePantryStore } from '@/store/usePantryStore';

export default function Kitchen() {
  const { items, addOrUpdate } = usePantryStore();
  return <View style={{flex:1,padding:16,gap:8}}><Text>Kitchen / Pantry</Text>
    {items.map((i)=><Text key={i.id}>{i.name} • {i.storageState} • exp {i.expiresAt}</Text>)}
    <Text onPress={()=>addOrUpdate('Heirloom Tomatoes',3,'pcs')}>+ Add tomatoes</Text>
  </View>;
}
