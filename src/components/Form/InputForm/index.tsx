import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import * as S from './styles';
import { Control, Controller } from 'react-hook-form';

interface IInputForm extends TextInputProps {
  control:  Control;
  name: string;
}

export function InputForm({
control,
name,
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
    </S.Container>
  )
}