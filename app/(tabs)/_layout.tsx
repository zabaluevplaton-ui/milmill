import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="discover" options={{ title: 'Discover' }} />
    <Tabs.Screen name="planner" options={{ title: 'Planner' }} />
    <Tabs.Screen name="video" options={{ title: 'Video' }} />
    <Tabs.Screen name="kitchen" options={{ title: 'Kitchen' }} />
    <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
  </Tabs>;
}
