import { router } from 'expo-router';
import { Text, View } from 'react-native';

export default function Profile() {
  return <View style={{flex:1,padding:16,gap:12}}>
    <Text>Profile</Text>
    <Text onPress={()=>router.push('/my-recipes')}>My Recipes</Text>
    <Text onPress={()=>router.push('/preferences')}>Preferences</Text>
    <Text onPress={()=>router.push('/settings')}>Settings</Text>
    <Text onPress={()=>router.push('/menu')}>Menu Drawer</Text>
  </View>;
}
