import { useState } from 'react';
import { PersonTypeButton } from '../../components/Form/PersonTypeButton';
import * as S from './styles';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import { PhysicalPerson } from '../../components/PhysicalPerson';
import {  LegalPerson } from '../../components/LegalPerson';
import { TYPES } from '../../utils/enums';

export function Register() {

  const [personType, setPersonType] = useState<TYPES.PHYSICAL_PERSON | TYPES.LEGAL_PERSON | ''>(TYPES.PHYSICAL_PERSON);

  const { reset } = useForm();

  function resetForm() {
    reset()
  }

  function handlePersonTypeSelect(type: TYPES.PHYSICAL_PERSON | TYPES.LEGAL_PERSON) {
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
                type={TYPES.PHYSICAL_PERSON}
                onPress={() => handlePersonTypeSelect(TYPES.PHYSICAL_PERSON)}
                isActive={personType === TYPES.PHYSICAL_PERSON}
              />
              <PersonTypeButton
                type={TYPES.LEGAL_PERSON}
                onPress={() => handlePersonTypeSelect(TYPES.LEGAL_PERSON)}
                isActive={personType ===  TYPES.LEGAL_PERSON}
              />
            </S.PersonTypes>

            {personType === TYPES.PHYSICAL_PERSON ? (
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