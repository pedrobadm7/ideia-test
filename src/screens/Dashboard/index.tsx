
import { useCallback, useEffect, useState } from 'react'
import { HightlightCard } from '../../components/HighlightCard'
import { IPersonCardProps, PersonCard } from '../../components/PersonCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './styles'
import { IPhysicalPerson } from '../../components/PhysicalPerson';
import { ILegalPerson } from '../../components/LegalPerson';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

type NavigationProps = {
  navigate: (screen: string, ...parameter: any) => void;
}

export function Dashboard() {
  const [physicalPersonData, setPhysicalPersonData] = useState<IPhysicalPerson[]>([]);
  const [legalPersonData, setLegalPersonData] = useState<ILegalPerson[]>([]);
  const [lastPhysicalDateRegistered, setLastPhysicalDateRegistered] = useState<string>();
  const [lastLegalDateRegistered, setLastLegalDateRegistered] = useState<string>();
  

  const navigation = useNavigation<NavigationProps>();

  const totalPersons: (IPhysicalPerson | ILegalPerson)[] = [...physicalPersonData, ...legalPersonData];

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
        ...person,
        date
      }
    });

    const legalPersonsFormatted: ILegalPerson[] = legalPersons.map((person: ILegalPerson) => {
      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(person.date));

      return {
        ...person,
        date
      }
    });

    if (physicalPersonData.length > 0) {
      const lastPhysicalPersonRegistered =
      new Date(
        Math.max.apply(
          Math,
          physicalPersons
            .map((physicalPerson: IPhysicalPerson) => new Date(physicalPerson.date)
              .getTime())
        )
      );

    const lastPhysicalPersonRegisteredFormatted = Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(new Date(lastPhysicalPersonRegistered));

    setLastPhysicalDateRegistered(lastPhysicalPersonRegisteredFormatted);
    }

    if (legalPersonData.length > 0) {
      const lastLegalPersonRegistered =
      new Date(
        Math.max.apply(
          Math,
          legalPersons
            .map((legalPerson: ILegalPerson) => new Date(legalPerson.date)
              .getTime())
        )
      );

    const lastLegalPersonRegisteredFormatted = Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(new Date(lastLegalPersonRegistered));

    setLastLegalDateRegistered(lastLegalPersonRegisteredFormatted);
    }

    setPhysicalPersonData(physicalPersonsFormatted);
    setLegalPersonData(legalPersonsFormatted);
  };

  function handleCardNavigation(id: string) {
    const person = totalPersons.filter((person) => person.id === id);

    navigation.navigate('MainFlow', {
      screen: 'Detalhes',
      params: {
        data: person
      }
    })
  }

  useEffect(() => {
    loadPersons()
  }, []);

  useFocusEffect(useCallback(() => {
    loadPersons()
  }, []));

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
          lastRegister={lastPhysicalDateRegistered ? `último cadastro feito em ${lastPhysicalDateRegistered}` : 'Sem registros'}
          type='physical_person'
        />
        <HightlightCard
          title="Pessoas juridicas"
          amount={String(legalPersonData?.length)}
          lastRegister={lastLegalDateRegistered ? `último cadastro feito em ${lastLegalDateRegistered}` : 'Sem registros'}
          type='legal_person'
        />
      </S.HighlightCards>

      <S.Persons>
        <S.Title>Listagem</S.Title>

        <S.PersonList
          data={totalPersons}
          keyExtractor={(item: IPersonCardProps) => item.id}
          renderItem={({ item }: { item: IPersonCardProps }) =>
          (
            <TouchableOpacity onPress={() => handleCardNavigation(item.id)}>
              <PersonCard
                {...item}
              />
            </TouchableOpacity>
          )
          }
        />

      </S.Persons>
    </S.Container>
  )
}

