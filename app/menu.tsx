import { router } from 'expo-router';
import { Text, View } from 'react-native';

const rows = [
  ['Discover','/(tabs)/discover'],['Planner','/(tabs)/planner'],['Kitchen','/(tabs)/kitchen'],['My Recipes','/my-recipes'],['Shopping List','/shopping-list'],['Preferences','/preferences'],['Chef Chat','/chef-chat'],['Settings','/settings']
] as const;

export default function Menu(){ return <View style={{flex:1,padding:16,gap:10}}>{rows.map(([label,route])=><Text key={label} onPress={()=>router.push(route as any)}>{label}</Text>)}</View>; }
