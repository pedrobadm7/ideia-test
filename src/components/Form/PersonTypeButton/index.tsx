import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface IPersonTypeButton extends TouchableOpacityProps {
  type: 'physical_person' | 'legal_person';
}

const icon = {
  'physical_person': 'person',
  'legal_person': 'md-business-sharp'
}

const categoryName = {
  'physical_person': 'Pessoa Física',
  'legal_person': 'Pessoa Juridica'
}

export function PersonTypeButton({type, ...rest}: IPersonTypeButton) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon[type]}/>
      <S.Title>
        {categoryName[type]}
      </S.Title>
    </S.Container>
  )
}