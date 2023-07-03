import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import { TYPES } from '../../../utils/enums';

interface IPersonTypeButton extends TouchableOpacityProps {
  type: TYPES.PHYSICAL_PERSON | TYPES.LEGAL_PERSON;
  isActive: boolean
}

export type KeyType = {
  [key in TYPES]: string
}

const icon: KeyType = {
  [TYPES.PHYSICAL_PERSON]: 'person',
  [TYPES.LEGAL_PERSON]: 'md-business-sharp'
}

const categoryName: KeyType = {
  [TYPES.PHYSICAL_PERSON]: 'Pessoa Física',
  [TYPES.LEGAL_PERSON]: 'Pessoa Juridica'
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