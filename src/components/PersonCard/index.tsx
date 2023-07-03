import { TYPES } from '../../utils/enums';
import { ILegalPerson } from '../LegalPerson';
import { IPhysicalPerson } from '../PhysicalPerson';
import * as S from './styles';

export interface IPersonCardProps extends IPhysicalPerson, ILegalPerson {}

type KeyType = {
  [key in TYPES]: string;
}

const categoryName: KeyType = {
  [TYPES.PHYSICAL_PERSON]: 'Pessoa Física',
  [TYPES.LEGAL_PERSON]: 'Pessoa Juridica'
}

const icon: KeyType = {
  [TYPES.PHYSICAL_PERSON]: 'person',
  [TYPES.LEGAL_PERSON]: 'md-business-sharp'
}

export function PersonCard(props: IPersonCardProps) {
  return (
    <S.Container>
      <S.Title>
        {props.type=== TYPES.PHYSICAL_PERSON ? props.complete_name : props.corporate_name}
      </S.Title>
      
      <S.Footer>
        <S.Category>

          <S.Icon name={icon[props.type as TYPES]}/>

          <S.CategoryName>
           {categoryName[props.type as TYPES]}
          </S.CategoryName>

        </S.Category>

        <S.Date>{props.date}</S.Date>
      </S.Footer>
    </S.Container>
  )
}