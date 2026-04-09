import * as Haptics from 'expo-haptics';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '@/constants/theme';

export const PrimaryButton = ({ label, onPress }: {label:string; onPress:()=>void}) => {
  const s = useSharedValue(1);
  const style = useAnimatedStyle(() => ({ transform: [{ scale: s.value }] }));
  return <Pressable onPressIn={()=>{s.value=withTiming(0.97,{duration:120});}} onPressOut={()=>{s.value=withTiming(1,{duration:180});}} onPress={()=>{Haptics.selectionAsync(); onPress();}}>
    <Animated.View style={[styles.btn, style]}><Text style={styles.txt}>{label}</Text></Animated.View>
  </Pressable>;
};
const styles = StyleSheet.create({ btn:{ backgroundColor: colors.primary, borderRadius:22, minHeight:48, alignItems:'center', justifyContent:'center', paddingHorizontal:20 }, txt:{ color:'#fff', fontWeight:'700' } });
