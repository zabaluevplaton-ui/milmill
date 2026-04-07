import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { aiChefService } from '@/services/aiChefService';
import { useCartStore } from '@/store/useCartStore';

export default function ChefChat() {
  const [input, setInput] = useState(''); const [out, setOut] = useState('Ask for substitutions or pantry help');
  const { addIngredients } = useCartStore();
  return <View style={{ flex:1, padding:16, gap:12 }}>
    <Text>Chef Chat</Text>
    <Text>{out}</Text>
    <TextInput value={input} onChangeText={setInput} placeholder="Ask Julian" style={{borderWidth:1,padding:12}} />
    <Pressable onPress={async()=>setOut(await aiChefService.ask(input))}><Text>Send</Text></Pressable>
    <Pressable onPress={()=>addIngredients([{id:'x',name:'Lemon',quantity:2,unit:'pcs',category:'Produce'}])}><Text>Add missing to cart</Text></Pressable>
  </View>;
}
