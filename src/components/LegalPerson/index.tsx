import { FieldValues, useForm } from 'react-hook-form';
import { InputForm } from '../Form/InputForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { Button } from '../Form/Button';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';

export interface ILegalPerson {
  corporate_name: string;
  cnpj: number;
  state_registration: string;
  opening_date: string;
  fantasy_name: string;
  comercial_address: string;
  professional_cellphone: number;
  business: string;
  legal_representative: string;
  type: 'physical_person' | 'legal_person' | '';
  date: Date;
  id: string;
}

type NavigationProps = {
  navigate: (screen: string) => void;
}

export function LegalPerson({
  personType,
  setPersonType
}: {
  personType: 'physical_person' | 'legal_person' | '',
  setPersonType: (personType: 'physical_person' | 'legal_person' | '') => void
}) {
  const { control, handleSubmit, reset } = useForm();
  const navigation = useNavigation<NavigationProps>();

  function resetForm() {
    reset()
  }

  async function handleRegister(form: FieldValues) {
    const newLegalPerson: ILegalPerson = {
      corporate_name: form.corporate_name,
      cnpj: form.cnpj,
      state_registration: form.state_registration,
      opening_date: form.opening_date,
      fantasy_name: form.fantasy_name,
      comercial_address: form.comercial_address,
      professional_cellphone: form.professional_cellphone,
      business: form.business,
      legal_representative: form.legal_representative,
      type: personType,
      date: new Date(),
      id: String(uuid.v4())
    }

    try {
      const dataKey = '@ideiaTest:legal_person';

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newLegalPerson];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setPersonType('');
      resetForm();
      navigation.navigate('Listagem');

    } catch (error) {
      console.log(error);

      Alert.alert('Não foi possível cadastrar a pessoa juridica.')
    }
  }

  return (
    <>
      <InputForm
        name='corporate_name'
        control={control}
        placeholder='Razão Social'
      />
      <InputForm
        name='cnpj'
        control={control}
        placeholder='CNPJ'
      />
      <InputForm
        name='state_registration'
        control={control}
        placeholder='Inscrição Estadual'
      />
      <InputForm
        name='opening_date'
        control={control}
        placeholder='Data de abertura da empresa'
      />
      <InputForm
        name='fantasy_name'
        control={control}
        placeholder='Nome fantasia'
      />
      <InputForm
        name='comercial_address'
        control={control}
        placeholder='Endereço Comercial'
      />
      <InputForm
        name='professional_cellphone'
        control={control}
        placeholder='Número de telefone'
      />
      <InputForm
        name='business'
        control={control}
        placeholder='Ramo de atividade da empresa'
      />
      <InputForm
        name='legal_representative'
        control={control}
        placeholder='Representante legal'
      />

      <S.ButtonContainer>
        <Button
          title='Enviar'
          onPress={handleSubmit(handleRegister)}
        />
      </S.ButtonContainer>
    </>
  )
}