import { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { PersonTypeButton } from '../../components/Form/PersonTypeButton';
import * as S from './styles';
import { SelectButton } from '../../components/Form/SelectButton';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { SelectScreen } from '../SelectScreen';
import { FieldValues, useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { PhysicalPerson } from '../../components/PhysicalPerson';
import { LegalPerson } from '../../components/LegalPerson';

const schema = Yup.object().shape({
  address: Yup.string().required('Endereço é obrigatório'),
  birth_date: Yup.number().required('Data de nascimento é obrigatório'),
  business: Yup.string(),
  cnpj: Yup.string().required('CNPJ é obrigatório'),
  comercial_address: Yup.string(),
  corporate_name: Yup.string().required('Nome da empresa é obrigatório'),
  cpf: Yup.string().required('CPF é obrigatório'),
  doc_id: Yup.string(),
  email: Yup.string().email(),
  fantasy_name: Yup.string(),
  job: Yup.string(),
  legal_representative: Yup.string(),
  marial_status: Yup.string(),
  name: Yup.string().required('Nome é obrigatório'),
  nationality: Yup.string(),
  opening_date: Yup.string(),
  phone_number: Yup.string(),
  professional_cellphone: Yup.string(),
  state_registration: Yup.string(),
  id: Yup.string(),
  date: Yup.date(),
  type: Yup.string().oneOf(['physical_person', 'legal_person']),
  gender: Yup.string(),
})

export function Register() {

  const [personType, setPersonType] = useState<'physical_person' | 'legal_person' | ''>('physical_person');

  const { reset } = useForm();

  function resetForm() {
    reset()
  }

  function handlePersonTypeSelect(type: 'physical_person' | 'legal_person') {
    setPersonType(type);
    resetForm();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>

            <S.PersonTypes>
              <PersonTypeButton
                type='physical_person'
                onPress={() => handlePersonTypeSelect('physical_person')}
                isActive={personType === 'physical_person'}
              />
              <PersonTypeButton
                type='legal_person'
                onPress={() => handlePersonTypeSelect('legal_person')}
                isActive={personType === 'legal_person'}
              />
            </S.PersonTypes>

            {personType === 'physical_person' ? (
              <PhysicalPerson personType={personType} setPersonType={setPersonType} />
            ) : (
              <LegalPerson personType={personType} setPersonType={setPersonType}/>
            )}
          </S.Fields>
        </S.Form>

      </S.Container>
    </TouchableWithoutFeedback>
  )
}