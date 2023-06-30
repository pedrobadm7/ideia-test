
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { HightlightCard } from '../../components/HighlightCard'
import { IPersonCardProps, PersonCard } from '../../components/PersonCard'
import * as S from './styles'

const data: IPersonCardProps[] = [
  {
    name: 'BARROS SOLUÇÕES DIGITAIS LTDA',
    type: 'juridic_person',
    date: '13/04/2023'
  }, 
  {
    name: 'Pedro Barros',
    type: 'physical_person',
    date: '25/05/2023'
  },
  {
    name: 'SOLO FORTE AGROPECUARIA LTDA',
    type: 'juridic_person',
    date: '26/05/2023'
  },
  {
    name: 'Adriano Barros',
    type: 'physical_person',
    date: '26/05/2023'
  }
]

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

      <S.PersonList 
      data={data}
      renderItem={({item}: {item: IPersonCardProps}) => <PersonCard name={item.name} type={item.type as IPersonCardProps['type']} date={item.date}/>}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: getBottomSpace() + 20
      }}
      />
         
    </S.Persons>
  </S.Container>  
  )
}

