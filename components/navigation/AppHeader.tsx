import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/theme';

export const AppHeader = ({ title='EPICUREAN' }: { title?: string }) => (
  <View style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.actions}>
      <Pressable onPress={() => router.push('/search')}><Text style={styles.action}>Search</Text></Pressable>
      <Pressable onPress={() => router.push('/cart')}><Text style={styles.action}>Cart</Text></Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  title: { fontWeight: '800', color: colors.primary, letterSpacing: 1 },
  actions: { flexDirection: 'row', gap: 12 },
  action: { color: colors.text, fontWeight: '600', minWidth: 44, minHeight: 44, textAlignVertical: 'center' }
});
