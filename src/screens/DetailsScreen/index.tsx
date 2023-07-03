import * as S from './styles';
import { IPhysicalPerson } from '../../components/PhysicalPerson';
import { ILegalPerson } from '../../components/LegalPerson';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

interface IDetailScreenProps extends IPhysicalPerson, ILegalPerson {
  route: {
    params: {
      data: IPhysicalPerson[] & ILegalPerson[]
    }
  }
}

type NavigationProps = {
  navigate: (screen: string, ...parameter: any) => void;
  goBack: () => void;
}

export function DetailsScreen({ route }: IDetailScreenProps) {
  const { params } = route;
  const person = params?.data[0] || [];

  const navigation = useNavigation<NavigationProps>();

  function handleNavigateBack() {
    navigation.goBack()
  }

  function handleFileNavigate() {
    navigation.navigate('MainFlow', {
      screen: 'Files',
      params: {
        file: person?.file
      }
    })
  }

  if (person.type === 'legal_person') {
    return (
      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={handleNavigateBack}>
            <S.Icon name='chevron-left' />
          </TouchableOpacity>
          <S.Title>{person.corporate_name}</S.Title>
        </S.Header>

        <S.CardContainer>
          <S.Card>
            <S.CardTitle>CNPJ:</S.CardTitle>
            <S.Text>{person.cnpj}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Inscrição Municipal: </S.CardTitle>
            <S.Text>{person.state_registration}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Data de abertura da empresa:</S.CardTitle>
            <S.Text>{person.opening_date}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Nome Fantasia:</S.CardTitle>
            <S.Text>{person.fantasy_name}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Endereço COmercial:</S.CardTitle>
            <S.Text>{person.comercial_address}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Telefone:</S.CardTitle>
            <S.Text>{person.professional_cellphone}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Ramo Comercial:</S.CardTitle>
            <S.Text>{person.business}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Representante Legal:</S.CardTitle>
            <S.Text>{person.legal_representative}</S.Text>
          </S.Card>

          {person?.file ? (<S.Card>
           
              <TouchableOpacity onPress={handleFileNavigate}>
                <S.CardTitle>Documento cadastrado</S.CardTitle>
                <S.Text>{person.file?.name}</S.Text>
              </TouchableOpacity>
            
          </S.Card>
          ) : null}
        </S.CardContainer>
      </S.Container>
    )
  } else {
    return (
      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={handleNavigateBack}>
            <S.Icon name='chevron-left' />
          </TouchableOpacity>
          <S.Title>{person.complete_name}</S.Title>
        </S.Header>

        <S.CardContainer>
          <S.Card>
            <S.CardTitle>Data de nascimento:</S.CardTitle>
            <S.Text>{person.birth_date}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Gênero: </S.CardTitle>
            <S.Text>{person.gender}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>CPF:</S.CardTitle>
            <S.Text>{person.cpf}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>RG:</S.CardTitle>
            <S.Text>{person.doc_id}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Endereço:</S.CardTitle>
            <S.Text>{person.address}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Telefone:</S.CardTitle>
            <S.Text>{person.phone_number}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Email:</S.CardTitle>
            <S.Text>{person.email}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Estado civil:</S.CardTitle>
            <S.Text>{person.marial_state}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Profissão:</S.CardTitle>
            <S.Text>{person.profession}</S.Text>
          </S.Card>

          <S.Card>
            <S.CardTitle>Nacionalidade:</S.CardTitle>
            <S.Text>{person.nationality}</S.Text>
          </S.Card>

          <S.Card>
            {person?.file ? (
              <TouchableOpacity onPress={handleFileNavigate}>
                <S.CardTitle>Documento cadastrado</S.CardTitle>
                <S.Text>{person.file?.name}</S.Text>
              </TouchableOpacity>
            ) : null}
          </S.Card>
        </S.CardContainer>
      </S.Container>
    )
  }

}