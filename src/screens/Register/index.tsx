import { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { PersonTypeButton } from '../../components/Form/PersonTypeButton';
import * as S from './styles';
import { SelectButton } from '../../components/Form/SelectButton';
import { Modal } from 'react-native';
import {  SelectScreen } from '../SelectScreen';
import { useForm } from 'react-hook-form';

interface IFormData {
  address?: string;
  birthday?: string;
  business?: string;
  cnpj?: string;
  comercial_address?: string;
  corporate_name?: string;
  cpf?: string;
  doc_id?: string;
  email?: string;
  fantasy_name?: string;
  job?: string;
  legal_representative?: string;
  marial_status?: string;
  name?: string;
  nationality?: string;
  opening_date?: string;
  phone_number?: string;
  professional_cellhpone?: string;
  state_registration?: string;
}

export function Register() {
  const [gender, setGender] = useState({
    key: 'male',
    name: 'Male',
    icon: 'man'
  });
  const [personType, setPersonType] = useState('physical_person');
  const [selectModalOpen, setSelectModalOpen] = useState(false);

  const {control, handleSubmit, reset} = useForm();

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

  function handleRegister(form: IFormData) {
    const data = {
      address: form.address,
      birthday: form.birthday, 
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

    console.log(data)
  }

  return (
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
            control={control}
            placeholder='Nome Completo'
          />
          <InputForm 
            name='birthday'
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
            name='job'
            control={control}
            placeholder='Profissão'
          />
          <InputForm
            name='nationality'
            control={control}
            placeholder='Nacionalidade'
          />
          </>
          ) : (
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
  )
}