import * as S from './styles'
import {TextInputProps} from 'react-native'

type InputProps = TextInputProps;

export function Input({...rest}: InputProps) {
  return (
    <S.Container {...rest}/>
  )
}