import * as S from './styles';

interface ISelectProps {
  title: string;
}

export function Select({title}: ISelectProps){
  return (
    <S.Container>
      <S.Title>
        {title}
      </S.Title>
      <S.Icon name='chevron-down'/>
    </S.Container>
  )
}