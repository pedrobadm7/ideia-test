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
import { Masks } from 'react-native-mask-input';
import { InputMasked } from '../Form/InputMasked';

export interface ILegalPerson {
  corporate_name: string;
  cnpj: string;
  state_registration: string;
  opening_date: string;
  fantasy_name: string;
  comercial_address: string;
  professional_cellphone: string;
  business: string;
  legal_representative: string;
  type: 'physical_person' | 'legal_person' | '';
  date: Date;
  id: string;
}

const schema = Yup.object().shape({
  corporate_name: Yup.string().required('A razão social é obrigatória.'),
  cnpj: Yup.string().required('O campo CNPJ é obrigatório.'),
  state_registration: Yup.string().required('A Inscrição estadual é obrigatória.'),
  opening_date: Yup.string().required('A data de abertura da empresa é obrigatória.'),
  fantasy_name: Yup.string().required('O nome fantasia é obrigatório.'),
  comercial_address: Yup.string().required('O endereço comercial é obrigatório.'),
  professional_cellphone: Yup.string().required('O telefone profissional é obrigatório'),
  business: Yup.string().required('O ramo da atividade é obrigatório'),
  legal_representative: Yup.string().required('O representante legal é obrigatório'),
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
  const { 
    control, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm({
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
        error={errors.corporate_name && errors.corporate_name.message}
      />
      <InputMasked
        name='cnpj'
        keyboardType='numeric'
        control={control as any}
        placeholder='CNPJ'
        error={errors.cnpj && errors.cnpj.message}
        mask={Masks.BRL_CNPJ}
      />
      <InputForm
        name='state_registration'
        keyboardType='numeric'
        control={control as any}
        placeholder='Inscrição Estadual'
        error={errors.state_registration && errors.state_registration.message}
      />
      <InputMasked
        name='opening_date'
        keyboardType='numeric'
        control={control as any}
        placeholder='Data de abertura da empresa'
        error={errors.opening_date && errors.opening_date.message}
        mask={Masks.DATE_DDMMYYYY}
      />
      <InputForm
        name='fantasy_name'
        control={control as any}
        placeholder='Nome fantasia'
        error={errors.fantasy_name && errors.fantasy_name.message}
      />
      <InputForm
        name='comercial_address'
        control={control as any}
        placeholder='Endereço Comercial'
        error={errors.comercial_address && errors.comercial_address.message}
      />
      <InputMasked
        name='professional_cellphone'
        keyboardType='numeric'
        control={control as any}
        placeholder='Número de telefone'
        error={errors.professional_cellphone && errors.professional_cellphone.message}
        mask={Masks.BRL_PHONE}
      />
      <InputForm
        name='business'
        control={control as any}
        placeholder='Ramo de atividade da empresa'
        error={errors.business && errors.business.message}
      />
      <InputForm
        name='legal_representative'
        control={control as any}
        placeholder='Representante legal'
        error={errors.legal_representative && errors.legal_representative.message}
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