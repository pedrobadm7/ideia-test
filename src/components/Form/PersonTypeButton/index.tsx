import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface IPersonTypeButton extends TouchableOpacityProps {
  type: 'physical_person' | 'legal_person';
  isActive: boolean
}

const icon = {
  'physical_person': 'person',
  'legal_person': 'md-business-sharp'
}

const categoryName = {
  'physical_person': 'Pessoa Física',
  'legal_person': 'Pessoa Juridica'
}

export function PersonTypeButton({type, isActive, ...rest}: IPersonTypeButton) {
  return (
    <S.Container  isActive={isActive} type={type} {...rest}>
      <S.Icon name={icon[type]}/>
      <S.Title>
        {categoryName[type]}
      </S.Title>
    </S.Container>
  )
}