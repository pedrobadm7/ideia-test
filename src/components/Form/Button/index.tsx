import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: IButtonProps) {
  return (
    <S.Container {...rest}>
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  )
}