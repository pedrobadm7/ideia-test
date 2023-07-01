import { FieldValues, useForm } from 'react-hook-form';
import { InputForm } from '../Form/InputForm';
import { SelectButton } from '../Form/SelectButton';
import { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { SelectScreen } from '../../screens/SelectScreen';
import { Button } from '../Form/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

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
  type: 'physical_person' | 'legal_person';
  date: Date;
};

type NavigationProps = {
  navigate: (screen: string) => void;
}

export function PhysicalPerson({
  personType,
  setPersonType
}: {
  personType: 'physical_person' | 'legal_person',
  setPersonType: (personType: string) => void
}) {
  const { control, handleSubmit, reset } = useForm();
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

      navigation.navigate('Listagem')

    } catch (error) {
      console.log(error);

      Alert.alert('Não foi possível cadastrar a pessoa física.')
    }
  }

  return (
    <>
      <InputForm
        name='complete_name'
        control={control}
        placeholder='Nome Completo'
        autoCapitalize='words'
      />
      <InputForm
        name='birth_date'
        control={control}
        placeholder='Data de nascimento'

      />
      <SelectButton
        title={gender.name}
        onPress={handleOpenSelectModal}
      />
      <InputForm
        name='cpf'
        control={control}
        placeholder='CPF'
      />
      <InputForm
        name='doc_id'
        control={control}
        placeholder='Documento de identidade'
      />
      <InputForm
        name='address'
        control={control}
        placeholder='Endereço'
      />
      <InputForm
        name='phone_number'
        control={control}
        placeholder='Numero de Telefone'
      />
      <InputForm
        name='email'
        control={control}
        placeholder='Email'
      />
      <InputForm
        name='marial_status'
        control={control}
        placeholder='Estado civil'
      />
      <InputForm
        name='profession'
        control={control}
        placeholder='Profissão'
      />
      <InputForm
        name='nationality'
        control={control}
        placeholder='Nacionalidade'
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