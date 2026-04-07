import { Text, View } from 'react-native';
import { usePreferencesStore } from '@/store/usePreferencesStore';

export default function Preferences(){
  const { prefs, update } = usePreferencesStore();
  return <View style={{flex:1,padding:16,gap:10}}><Text>Refine Your Palate</Text>
    <Text onPress={()=>update({treatDay:!prefs.treatDay})}>Treat day: {String(prefs.treatDay)}</Text>
    <Text onPress={()=>update({maxCookTime:45})}>Set max cook time 45m</Text>
    <Text onPress={()=>update({diets:['High Protein']})}>Diet: High Protein</Text>
  </View>;
}
