import { useState } from 'react'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { PersonTypeButton } from '../../components/Form/PersonTypeButton'
import * as S from './styles'
import { Select } from '../../components/Form/Select'

export function Register() {
  const [personType, setPersonType] = useState('physical_person');

  function handlePersonTypeSelect(type: 'physical_person' | 'legal_person') {
    setPersonType(type)
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
            <Input 
            placeholder='Nome Completo'
          />
          <Input 
            placeholder='Data de nascimento'
          />
          <Select 
            title='Gênero'
          />
          <Input 
            placeholder='CPF'
          />
          <Input 
            placeholder='Documento de identidade'
          />
          <Input 
            placeholder='Endereço'
          />
          <Input 
            placeholder='Numero de Telefone'
          />
          <Input 
            placeholder='Email'
          />
          <Input 
            placeholder='Estado civil'
          />
          <Input 
            placeholder='Profissão'
          />
          <Input 
            placeholder='Nacionalidade'
          />
          </>
          ) : (
           <>
            <Input 
              placeholder='Razão Social'
            />
            <Input 
              placeholder='CNPJ'
            />
            <Input 
              placeholder='Inscrição Estadual'
            />
            <Input 
              placeholder='Data de abertura da empresa'
            />
            <Input 
              placeholder='Nome fantasia'
            />
            <Input 
              placeholder='Endereço Comercial'
            />
            <Input 
              placeholder='Número de telefone'
            />
            <Input 
              placeholder='Ramo de atividade da empresa'
            />
            <Input 
              placeholder='Representante legal'
            />
           </>
          )}
        </S.Fields>

        <S.ButtonContainer>
          <Button title='Enviar' />
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  )
}