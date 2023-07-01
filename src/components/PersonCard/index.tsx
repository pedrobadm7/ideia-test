import { ILegalPerson } from '../LegalPerson';
import { IPhysicalPerson } from '../PhysicalPerson';
import * as S from './styles';

export interface IPersonCardProps extends IPhysicalPerson, ILegalPerson {}

interface KeyType {
  [key: string]: string;
}

const categoryName: KeyType = {
  'physical_person': 'Pessoa Física',
  'legal_person': 'Pessoa Juridica'
}

const icon: KeyType = {
  'physical_person': 'person',
  'legal_person': 'md-business-sharp'
}

export function PersonCard(props: IPersonCardProps) {

  return (
    <S.Container>
      <S.Title>
        {props.type==='physical_person' ? props.complete_name : props.corporate_name}
      </S.Title>
      
      <S.Footer>
        <S.Category>

          <S.Icon name={icon[props.type]}/>

          <S.CategoryName>
           {categoryName[props.type]}
          </S.CategoryName>

        </S.Category>

        <S.Date>{props.date}</S.Date>
      </S.Footer>
    </S.Container>
  )
}