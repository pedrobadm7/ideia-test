import * as S from './styles'

export function HightlightCard() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Pessoas físicas</S.Title>
        <S.Icon name='person' />
      </S.Header>

      <S.Footer>
        <S.Amount>Total: 57</S.Amount>
        <S.LastRegister>Último cadastro dia 13 de abril</S.LastRegister>
      </S.Footer>
    </S.Container>
  )
}