import { FlatList } from 'react-native';
import * as S from './styles';
import { genderData } from '../../utils/gender';
import { Button } from '../../components/Form/Button';

export interface IGender {
  key: string;
  name: string;
  icon: string;
}

interface ISelectScreenProps {
  data: IGender;
  setGender: (gender: IGender) =>void;
  closeSelectCategory: () => void;
}

export function SelectScreen({data, setGender, closeSelectCategory}: ISelectScreenProps) {
  
  function handleGenderSelect(gender: IGender) {
    setGender(gender)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Gênero</S.Title>
      </S.Header>

      <FlatList 
        data={genderData}
        style={{flex: 1, width: '100%'}}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <S.List 
          onPress={() => handleGenderSelect(item)}
          isActive={data.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.List>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button title='Selecionar' onPress={closeSelectCategory}/>
      </S.Footer>
    </S.Container>
  )
}