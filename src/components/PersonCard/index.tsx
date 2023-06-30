import * as S from './styles';

export function PersonCard() {
  return (
    <S.Container>
      <S.Title>BARROS SOLUÇÕES DIGITAIS LTDA</S.Title>
      
      <S.Footer>
        <S.Category>
          <S.Icon name='md-business-sharp'/>
          <S.CategoryName>
            Pessoa Jurídica 
          </S.CategoryName>
        </S.Category>
        
        <S.Date>13/04/2020</S.Date>
      </S.Footer>
    </S.Container>
  )
}