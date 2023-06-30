import * as S from './styles'

interface IHighlightCardProps {
  title: string;
  amount: string;
  lastRegister: string;
  type: 'physical_person' | 'legal_person'
}

const icon = {
  'physical_person': 'person',
  'legal_person': 'md-business-sharp'
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