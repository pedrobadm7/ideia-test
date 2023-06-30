import { FlatList } from 'react-native';
import * as S from './styles';
import { genderData } from '../../utils/gender';
import { Button } from '../../components/Form/Button';

interface IGender {
  key: string;
  gender: string;
}

interface ISelectScreenProps {
  gender: string;
  setGender: (gender: IGender) =>void;
  closeSelectCategory: () => void;
}

export function SelectScreen({gender, setGender, closeSelectCategory}: ISelectScreenProps) {
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
          <S.List>
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.List>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button title='Selecionar'/>
      </S.Footer>
    </S.Container>
  )
}