import { TextInputProps } from 'react-native';
import * as S from './styles';
import { Control, Controller } from 'react-hook-form';
import MaskInput from 'react-native-mask-input';

interface IInputMasked extends TextInputProps {
  control: Control;
  name: string;
  error: string | undefined;
  mask: any;
}

export function InputMasked({
control,
name,
error,
mask,
...rest
}: IInputMasked) {
  return (
    <>
      <S.Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <MaskInput 
            onChangeText={(masked) => {
              onChange(masked)
            }}
            value={value}
            mask={mask}
            {...rest}
        />
        )}
        name={name}
      />
     
    </S.Container>
     {error && <S.Error>{error}</S.Error>}
    </>
  )
}