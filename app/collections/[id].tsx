import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function CollectionScreen(){ const {id}=useLocalSearchParams<{id:string}>(); return <View style={{flex:1,padding:16}}><Text>Collection {id}</Text><Text>Create/Edit collection modal scaffolded</Text></View>; }
