
import { useEffect, useState } from 'react'
import { HightlightCard } from '../../components/HighlightCard'
import { IPersonCardProps, PersonCard } from '../../components/PersonCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './styles'
import { IPhysicalPerson } from '../../components/PhysicalPerson';

export function Dashboard(){
const [physicalPersonData, setPhysicalPersonData] = useState<IPhysicalPerson[]>([])

async function loadPersons() {
  const physicalPersonDataKey = '@ideiaTest:physical_person';

  const physicalPersonResponse = await AsyncStorage.getItem(physicalPersonDataKey);

  const physicalPersons = physicalPersonResponse ? JSON.parse(physicalPersonResponse) : [];


  const physicalPersonsFormatted: IPhysicalPerson[] = physicalPersons.map((person: IPhysicalPerson) => {
    const date = Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).format(new Date(person.date));

    return {
      name: person.complete_name,
      type: person.type,
      date,
    }
  });

  setPhysicalPersonData(physicalPersonsFormatted)
}

useEffect(() => {
  loadPersons()
}, []);

  return (
   <S.Container>
    <S.Header>
      <S.UserWrapper>
      <S.UserInfo>
        <S.User>
          <S.UserName>FastRegister</S.UserName>
        </S.User>
      </S.UserInfo>

      </S.UserWrapper>   
    </S.Header>

    <S.HighlightCards>
      <HightlightCard 
        title="Pessoas físicas" 
        amount={String(physicalPersonData?.length)} 
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
        data={physicalPersonData}
        keyExtractor={(item: IPersonCardProps) => item}
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

