import { FieldValues, Resolver, useForm } from 'react-hook-form';
import { InputForm } from '../Form/InputForm';
import { SelectButton } from '../Form/SelectButton';
import { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { SelectScreen } from '../../screens/SelectScreen';
import { Button } from '../Form/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


export interface IPhysicalPerson {
  complete_name: string;
  birth_date: string;
  gender: 'Male' | 'Female';
  cpf: number;
  doc_id: number;
  address: string;
  phone_number: number;
  email: string;
  marial_state: string;
  profession: string;
  nationality: string;
  type: 'physical_person' | 'legal_person' | '';
  date: Date;
  id: string
};

const schema = Yup.object().shape({
  complete_name: Yup.string().required('Nome completo é obrigatório.'),
  birth_date: Yup.string().required('Data de nascimento é obriagatória.'),
  gender: Yup.string().oneOf(['Male', 'Female']).required('O gênero é obrigatório'),
  cpf: Yup.number().required('O CPF é obrigatório').typeError('O CPF deve ser um número'),
  doc_id: Yup.number().required('O doc_id é obrigatório').typeError('O RG deve ser um número'),
  address: Yup.string().required('Endereço é obrigatório'),
  phone_number: Yup.number().required('O número de telefone é obrigatório').typeError('O número de telefone deve ser um número'),
  email: Yup.string().required('Email é obrigatório'),
  marial_state: Yup.string().required('Estado cívil é obrigatório'),
  profession: Yup.string().required('Informe sua profissão.'),
  nationality: Yup.string().required('Informe sua nacionalidade.'),
  type: Yup.string().oneOf(['physical_person', 'legal_person', '']).required('O tipo é obrigatório'),
  date: Yup.date().required('A data é obrigatória'),
  id: Yup.string().required('O ID é obrigatório'),
})

type NavigationProps = {
  navigate: (screen: string) => void;
}

export function PhysicalPerson({
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
    formState: {errors}
   } = useForm<IPhysicalPerson>({
      resolver: yupResolver(schema)
    });

  const navigation = useNavigation<NavigationProps>();

  const [gender, setGender] = useState({
    key: 'gender',
    name: 'Gender',
  });
  const [selectModalOpen, setSelectModalOpen] = useState(false);

  function handleCloseSelectModal() {
    setSelectModalOpen(false)
  }

  function handleOpenSelectModal() {
    setSelectModalOpen(true)
  }

  function resetForm() {
    reset()
  }

  async function handleRegister(form: FieldValues) {
    if (gender.name === 'Gênero') {
      return Alert.alert('Selecione um genêro!');
    }


    const newPhysicalPerson: IPhysicalPerson = {
      complete_name: form.complete_name,
      birth_date: form.birth_date,
      gender: form.gender,
      cpf: form.cpf,
      doc_id: form.doc_id,
      address: form.address,
      phone_number: form.phone_number,
      email: form.email,
      marial_state: form.marial_state,
      profession: form.profession,
      nationality: form.nationality,
      type: personType,
      date: new Date(),
      id: String(uuid.v4())
    }

    try {
      const dataKey = '@ideiaTest:physical_person';

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newPhysicalPerson];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setPersonType('');
      setGender({
        key: 'gender',
        name: 'Gender'
      });
      resetForm()

      navigation.navigate('Listagem');

    } catch (error) {
      console.log(error);

      Alert.alert('Não foi possível cadastrar a pessoa física.')
    }
  }

  return (
    <>
      <InputForm
        name='complete_name'
        control={control as any}
        placeholder='Nome Completo'
        autoCapitalize='words'
        error={errors.complete_name && errors.complete_name.message}
      />
      <InputForm
        name='birth_date'
        control={control as any}
        placeholder='Data de nascimento'
        error={errors.birth_date && errors.birth_date.message}
      />
      <SelectButton
        title={gender.name}
        onPress={handleOpenSelectModal}
      />
      <InputForm
        name='cpf'
        control={control as any}
        placeholder='CPF'
        error={errors.cpf && errors.cpf.message}
      />
      <InputForm
        name='doc_id'
        control={control as any}
        placeholder='Documento de identidade'
        error={errors.doc_id && errors.doc_id.message}
      />
      <InputForm
        name='address'
        control={control as any}
        placeholder='Endereço'
        error={errors.address && errors.address.message}
      />
      <InputForm
        name='phone_number'
        control={control as any}
        placeholder='Numero de Telefone'
        error={errors.phone_number && errors.phone_number.message}
      />
      <InputForm
        name='email'
        control={control as any}
        placeholder='Email'
        error={errors.email && errors.email.message}
      />
      <InputForm
        name='marial_state'
        control={control as any}
        placeholder='Estado civil'
        error={errors.marial_state && errors.marial_state.message}
      />
      <InputForm
        name='profession'
        control={control as any}
        placeholder='Profissão'
        error={errors.profession && errors.profession.message}
      />
      <InputForm
        name='nationality'
        control={control as any}
        placeholder='Nacionalidade'
        error={errors.nationality && errors.nationality.message}
      />

      <S.ButtonContainer>
        <Button
          title='Enviar'
          onPress={handleSubmit(handleRegister)}
        />
      </S.ButtonContainer>

      <Modal visible={selectModalOpen}>
        <SelectScreen
          data={gender}
          setGender={setGender}
          closeSelectCategory={handleCloseSelectModal}
        />
      </Modal>
    </>
  )
}