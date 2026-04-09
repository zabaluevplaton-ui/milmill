import { BlurView } from 'expo-blur';
import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { radius } from '@/constants/theme';

export const GlassCard = ({ children }: PropsWithChildren) => (
  <View style={styles.wrap}><BlurView intensity={22} tint="light" style={styles.blur}>{children}</BlurView></View>
);

const styles = StyleSheet.create({
  wrap: { borderRadius: radius.card, overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.16)' },
  blur: { padding: 16 },
});
