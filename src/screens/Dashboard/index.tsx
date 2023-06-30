
import { useEffect, useState } from 'react'
import { HightlightCard } from '../../components/HighlightCard'
import { IPersonCardProps, PersonCard } from '../../components/PersonCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './styles'

export function Dashboard(){
const [data, setData] = useState<IPersonCardProps[]>();


async function loadPersons() {
  const dataKey = '@ideiaTest:persons';
  const response = await AsyncStorage.getItem(dataKey);

  const persons = response ? JSON.parse(response) : [];

  const personsFormatted: IPersonCardProps[] = persons.map((person: IPersonCardProps) => {
    const date = Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).format(new Date(person.date));

    return {
      id: person.id,
      name: person.name,
      type: person.type,
      date,
    }

  });

  setData(personsFormatted)
}

useEffect(() => {
  loadPersons()
}, []);

  return (
   <S.Container>
    <S.Header>
      <S.UserWrapper>
      <S.UserInfo>
        {/* <S.Photo source={{uri:'https://avatars.githubusercontent.com/u/78272705?v=4' }}/> */}
        <S.User>
          {/* <S.UserGreeting>Olá</S.UserGreeting> */}
          <S.UserName>FastRegister</S.UserName>
        </S.User>
      </S.UserInfo>

      {/* <S.Icon name='power'/> */}
      </S.UserWrapper>   
    </S.Header>

    <S.HighlightCards>
      <HightlightCard 
        title="Pessoas físicas" 
        amount={String(data?.length)} 
        lastRegister="último cadastro feito em 27 de junho"
        type='physical_person'
      />
      <HightlightCard 
          title="Pessoas juridicas" 
          amount="88" 
          lastRegister="último cadastro feito em 15 de junho"
        type='legal_person'
      />
    </S.HighlightCards>

    <S.Persons>
      <S.Title>Listagem</S.Title>

      <S.PersonList 
        data={data}
        keyExtractor={(item: IPersonCardProps) => item.id}
        renderItem={({item: {name, type, date}}: {item: IPersonCardProps}) => <PersonCard 
          name={name} 
          type={type} 
          date={date}
        />}
      />
         
    </S.Persons>
  </S.Container>  
  )
}

