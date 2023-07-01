import { useState } from 'react';
import { PersonTypeButton } from '../../components/Form/PersonTypeButton';
import * as S from './styles';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import { PhysicalPerson } from '../../components/PhysicalPerson';
import {  LegalPerson } from '../../components/LegalPerson';

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
              <PhysicalPerson personType={personType} />
            ) : (
              <LegalPerson personType={personType} />
            )}
          </S.Fields>
        </S.Form>

      </S.Container>
    </TouchableWithoutFeedback>
  )
}