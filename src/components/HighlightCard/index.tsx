import { TYPES } from '../../utils/enums';
import * as S from './styles'

interface IHighlightCardProps {
  title: string;
  amount: string;
  lastRegister?: string;
  type: TYPES.PHYSICAL_PERSON | TYPES.LEGAL_PERSON
}

type KeyType = {
  [key in TYPES]: string;
};

const icon: KeyType = {
  [TYPES.PHYSICAL_PERSON]: 'person',
  [TYPES.LEGAL_PERSON]: 'md-business-sharp'
}

export function HightlightCard({title, amount, lastRegister, type}: IHighlightCardProps) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Icon name={icon[type]} />
      </S.Header>

      <S.Footer>
        <S.Amount>Total: {amount}</S.Amount>
        <S.LastRegister>{lastRegister}</S.LastRegister>
      </S.Footer>
    </S.Container>
  )
}