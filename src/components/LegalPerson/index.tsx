import { useForm } from 'react-hook-form';
import { InputForm } from '../Form/InputForm';

import * as S from './styles';
import { Button } from '../Form/Button';

export function LegalPerson() {
  const { control, handleSubmit, reset } = useForm();

  function handleRegister() {}

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