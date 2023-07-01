import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import * as S from './styles';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { IPhysicalPerson } from '../../PhysicalPerson';
import { ILegalPerson } from '../../LegalPerson';

interface IInputForm extends TextInputProps {
  control: Control;
  name: string;
  error?: string | undefined;
}

export function InputForm({
control,
name,
error,
...rest
}: IInputForm) {
  return (
    <S.Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest}
        />
        )}
        name={name}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}