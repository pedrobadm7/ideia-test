
import { useEffect, useState } from 'react'
import { HightlightCard } from '../../components/HighlightCard'
import { IPersonCardProps, PersonCard } from '../../components/PersonCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './styles'
import { IPhysicalPerson } from '../../components/PhysicalPerson';
import { ILegalPerson } from '../../components/LegalPerson';

export function Dashboard(){
const [physicalPersonData, setPhysicalPersonData] = useState<IPhysicalPerson[]>([]);
const [legalPersonData, setLegalPersonData] = useState<ILegalPerson[]>([]);

const totalPersons: (IPhysicalPerson | ILegalPerson)[] = [...physicalPersonData, ...legalPersonData];
console.log(totalPersons)

async function loadPersons() {
  const physicalPersonDataKey = '@ideiaTest:physical_person';
  const legalPersonDataKey = '@ideiaTest:legal_person';

  const physicalPersonResponse = await AsyncStorage.getItem(physicalPersonDataKey);
  const legalPersonResponse = await AsyncStorage.getItem(legalPersonDataKey);

  const physicalPersons = physicalPersonResponse ? JSON.parse(physicalPersonResponse) : [];
  const legalPersons = legalPersonResponse ? JSON.parse(legalPersonResponse) : [];


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
      id: person.id
    }
  });

  const legalPersonsFormatted: ILegalPerson[] = legalPersons.map((person: ILegalPerson) => {
    const date = Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).format(new Date(person.date));

    return {
      name: person.corporate_name,
      type: person.type,
      date,
      id: person.id
    }
  });

  setPhysicalPersonData(physicalPersonsFormatted);
  setLegalPersonData(legalPersonsFormatted);
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
          amount={String(legalPersonData?.length)}
          lastRegister="último cadastro feito em 15 de junho"
        type='legal_person'
      />
    </S.HighlightCards>

    <S.Persons>
      <S.Title>Listagem</S.Title>

      <S.PersonList 
        data={totalPersons}
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

