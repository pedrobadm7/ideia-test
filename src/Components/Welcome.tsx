import { Text, View } from 'react-native';

export function Welcome({title}: {title: string}){
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}