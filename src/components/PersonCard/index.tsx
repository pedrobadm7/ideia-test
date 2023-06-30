import * as S from './styles';

export interface IPersonCardProps {
  name: string;
  type: 'physical_person' | 'juridic_person';
  date: string;
}

const categoryName = {
  'physical_person': 'Pessoa Física',
  'juridic_person': 'Pessoa Juridica'
}

const icon = {
  'physical_person': 'person',
  'juridic_person': 'md-business-sharp'
}

export function PersonCard({name, type, date}: IPersonCardProps) {
  return (
    <S.Container>
      <S.Title>
        {name}
      </S.Title>
      
      <S.Footer>
        <S.Category>

          <S.Icon name={icon[type]}/>

          <S.CategoryName>
           {categoryName[type]}
          </S.CategoryName>

        </S.Category>

        <S.Date>{date}</S.Date>
      </S.Footer>
    </S.Container>
  )
}