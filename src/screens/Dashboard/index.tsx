
import { HightlightCard } from '../../components/HighlightCard'
import { PersonCard } from '../../components/PersonCard'
import * as S from './styles'


export function Dashboard(){
  return (
   <S.Container>
    <S.Header>
      <S.UserWrapper>
      <S.UserInfo>
        <S.Photo source={{uri:'https://avatars.githubusercontent.com/u/78272705?v=4' }}/>
        <S.User>
          <S.UserGreeting>Olá</S.UserGreeting>
          <S.UserName>Pedro</S.UserName>
        </S.User>
      </S.UserInfo>

      <S.Icon name='power'/>
      </S.UserWrapper>   
    </S.Header>

    <S.HighlightCards>
      <HightlightCard 
        title="Pessoas físicas" 
        amount="57" 
        lastRegister="último cadastro feito em 27 de junho"
        type='physical_person'
      />
      <HightlightCard 
          title="Pessoas juridicas" 
          amount="88" 
          lastRegister="último cadastro feito em 15 de junho"
        type='juridic_person'
      />
    </S.HighlightCards>

    <S.Persons>
      <S.Title>Listagem</S.Title>

      <PersonCard />
    </S.Persons>
  </S.Container>  
  )
}

