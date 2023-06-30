import { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { PersonTypeButton } from '../../components/Form/PersonTypeButton';
import * as S from './styles';
import { SelectButton } from '../../components/Form/SelectButton';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import {  SelectScreen } from '../SelectScreen';
import { FieldValues, useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormData {
  address: string;
  birth_date: string;
  business: string;
  cnpj: string;
  comercial_address: string;
  corporate_name: string;
  cpf: string;
  doc_id: string;
  email: string;
  fantasy_name: string;
  job: string;
  legal_representative: string;
  marial_status: string;
  name: string;
  nationality: string;
  opening_date: string;
  phone_number: string;
  professional_cellhpone: string;
  state_registration: string;
  id: string;
  date: Date;
}

type NavigationProps = {
  navigate:(screen:string) => void;
}

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
  const [gender, setGender] = useState({
    key: 'gender',
    name: 'Gender',
  });
  const [personType, setPersonType] = useState('physical_person');
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  const {
    control, 
    handleSubmit, 
    reset, 
    formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  });

  

  function resetForm() {
    reset()
  }

  function handlePersonTypeSelect(type: 'physical_person' | 'legal_person') {
    setPersonType(type);
    resetForm();
  }

  function handleCloseSelectModal() {
    setSelectModalOpen(false)
  }

  function handleOpenSelectModal() {
    setSelectModalOpen(true)
  }

  async function handleRegister(form: FieldValues) {
    if(gender.key === 'gender' && personType === 'physical_person') {
      return Alert.alert('Selecione um gênero')
    }

    const newPerson: IFormData= {
      id: String(uuid.v4()),
      date: new Date(),
      address: form.address,
      birth_date: form.birth_date, 
      business: form.business,
      cnpj: form.cnpj,
      comercial_address: form.comercial_address,
      corporate_name: form.corporate_name,
      cpf: form.cpf,
      doc_id: form.doc_id,
      email: form.email,
      fantasy_name: form.fantasy_name,
      job: form.job,
      legal_representative: form.legal_representative, 
      marial_status: form.marial_status,
      name: form.name,
      nationality: form.nationality,
      opening_date: form.opening_date,
      phone_number: form.phone_number,
      professional_cellhpone: form.professional_cellhpone,
      state_registration: form.state_registration
    }

    try {
      const dataKey = '@ideiaTest:persons';

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [  ...currentData,
        newPerson]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setPersonType('');
      setGender({
        key: 'male',
        name: 'Male',
      });
      resetForm()

      navigation.navigate('Listagem')
      
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar!')
    }
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
            <>
              <InputForm 
              name='name'
              control={control as any}
              placeholder='Nome Completo'
              autoCapitalize='words'
              error={errors.name && errors.name.message}
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
              name='marial_status'
              control={control as any}
              placeholder='Estado civil'
              error={errors.marial_status && errors.marial_status.message}
            />
            <InputForm
              name='job'
              control={control as any}
              placeholder='Profissão'
              error={errors.job && errors.job.message}
            />
            <InputForm
              name='nationality'
              control={control as any}
              placeholder='Nacionalidade'
              error={errors.nationality && errors.nationality.message}
            />
            </>
            ) : (
            <>
              <InputForm
                name='corporate_name'
                control={control as any as any}
                placeholder='Razão Social'
                error={errors.corporate_name && errors.corporate_name.message}
              />
              <InputForm 
                name='cnpj'
                control={control as any}
                placeholder='CNPJ'
                error={errors.cnpj && errors.cnpj.message}
              />
              <InputForm
                name='state_registration'
                control={control as any}
                placeholder='Inscrição Estadual'
                error={errors.state_registration && errors.state_registration.message}
              />
              <InputForm
                name='opening_date' 
                control={control as any}
                placeholder='Data de abertura da empresa'
                error={errors.opening_date && errors.opening_date.message}
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
              <InputForm
                name='professional_cellphone'
                control={control as any}
                placeholder='Número de telefone'
                error={errors.professional_cellphone && errors.professional_cellphone.message}
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
            </>
            )}
          </S.Fields>

          <S.ButtonContainer>
            <Button 
              title='Enviar' 
              onPress={handleSubmit(handleRegister)}
            />
          </S.ButtonContainer>
        </S.Form>

      
        
        <Modal visible={selectModalOpen}>
          <SelectScreen 
            data={gender}
            setGender={setGender}
            closeSelectCategory={handleCloseSelectModal}
          />
        </Modal>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}