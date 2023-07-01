import { FieldValues, Resolver, useForm } from 'react-hook-form';
import { InputForm } from '../Form/InputForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { Button } from '../Form/Button';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = Yup.object().shape({
  corporate_name: Yup.string().required('O campo corporate_name é obrigatório'),
  cnpj: Yup.number().typeError('O campo cnpj deve ser um número').required('O campo cnpj é obrigatório'),
  state_registration: Yup.string().required('O campo state_registration é obrigatório'),
  opening_date: Yup.string().required('O campo opening_date é obrigatório'),
  fantasy_name: Yup.string().required('O campo fantasy_name é obrigatório'),
  comercial_address: Yup.string().required('O campo comercial_address é obrigatório'),
  professional_cellphone: Yup.number().typeError('O campo professional_cellphone deve ser um número').required('O campo professional_cellphone é obrigatório'),
  business: Yup.string().required('O campo business é obrigatório'),
  legal_representative: Yup.string().required('O campo legal_representative é obrigatório'),
  type: Yup.string().oneOf(['physical_person', 'legal_person', ''], 'O campo type deve ser uma das opções válidas').required('O campo type é obrigatório'),
  date: Yup.date().required('O campo date é obrigatório'),
  id: Yup.string().required('O campo id é obrigatório'),
});

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
  const { control, handleSubmit, reset } = useForm<ILegalPerson>({
    resolver: yupResolver(schema)
  });
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
        control={control as any}
        placeholder='Razão Social'
      />
      <InputForm
        name='cnpj'
        control={control as any}
        placeholder='CNPJ'
      />
      <InputForm
        name='state_registration'
        control={control as any}
        placeholder='Inscrição Estadual'
      />
      <InputForm
        name='opening_date'
        control={control as any}
        placeholder='Data de abertura da empresa'
      />
      <InputForm
        name='fantasy_name'
        control={control as any}
        placeholder='Nome fantasia'
      />
      <InputForm
        name='comercial_address'
        control={control as any}
        placeholder='Endereço Comercial'
      />
      <InputForm
        name='professional_cellphone'
        control={control as any}
        placeholder='Número de telefone'
      />
      <InputForm
        name='business'
        control={control as any}
        placeholder='Ramo de atividade da empresa'
      />
      <InputForm
        name='legal_representative'
        control={control as any}
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