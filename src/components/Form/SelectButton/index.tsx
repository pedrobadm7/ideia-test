import * as S from './styles';

interface ISelectProps {
  title: string;
  onPress: () => void;
}

export function SelectButton({title, onPress}: ISelectProps){
  return (
    <S.Container onPress={onPress}>
      <S.Title title={title}>
        {title}
      </S.Title>
      <S.Icon name='chevron-down'/>
    </S.Container>
  )
}