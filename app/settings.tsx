import { Text, View } from 'react-native';
import { usePreferencesStore } from '@/store/usePreferencesStore';

export default function Settings(){
  const { prefs, update } = usePreferencesStore();
  return <View style={{flex:1,padding:16,gap:10}}><Text>Settings</Text>
    <Text onPress={()=>update({reduceMotion:!prefs.reduceMotion})}>Reduce Motion: {String(prefs.reduceMotion)}</Text>
    <Text onPress={()=>update({haptics:!prefs.haptics})}>Haptics: {String(prefs.haptics)}</Text>
    <Text onPress={()=>update({sounds:!prefs.sounds})}>Sounds: {String(prefs.sounds)}</Text>
  </View>;
}
