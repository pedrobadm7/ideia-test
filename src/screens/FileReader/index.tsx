import Pdf from 'react-native-pdf';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';

type NavigationProps = {
  goBack: () => void;
}

export function FileReader({ route }: any) {
  const { params } = route;
  const file = params.file;
console.log({file})
  const navigation = useNavigation<NavigationProps>();

  function handleNavigateBack() {
    navigation.goBack()
  }
  if (file?.mimeType === 'application/pdf') {
    return (
      <View style={{
        flex: 1
      }}
      >
        <S.Header>
          <TouchableOpacity onPress={handleNavigateBack}>
            <S.Icon name='chevron-left' />
          </TouchableOpacity>
          <S.Title>Leitor de arquivos</S.Title>
        </S.Header>

        <Pdf
          scale={2}
          fitPolicy={2}
          source={file}
          style={{
            flex: 1,
            width: Dimensions.get('window').width, height: Dimensions.get('window').height
          }}
        />
      </View>
    )
  } else {
    return (
      <View style={{flex: 1}}>
         <S.Header>
          <TouchableOpacity onPress={handleNavigateBack}>
            <S.Icon name='chevron-left' />
          </TouchableOpacity>
          <S.Title>Leitor de arquivos</S.Title>
        </S.Header>
        <Image source={{uri: file?.uri}} style={{
          height: '100%',
          resizeMode: 'cover'
        }} />
      </View>
    )
  }
}