import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { creators } from '@/services/mockData';
import { useCreatorsStore } from '@/store/useCreatorsStore';
import { aiVideoGenerationService } from '@/services/aiVideoGenerationService';

export default function CreatorProfile(){
  const { id } = useLocalSearchParams<{id:string}>();
  const c = creators.find((x)=>x.id===id)!;
  const { followedIds, toggleFollow } = useCreatorsStore();
  return <View style={{flex:1,padding:16,gap:10}}><Text>{c.name} @{c.nickname}</Text><Text>{c.bio}</Text>
    <Text onPress={()=>toggleFollow(c.id)}>{followedIds.includes(c.id)?'Unfollow':'Follow'}</Text>
    <Text onPress={async()=>{const r=await aiVideoGenerationService.generate('new dish story'); alert(r.jobId);}}>Mock AI video generation</Text>
  </View>;
}
