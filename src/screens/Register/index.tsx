import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { PersonTypeButton } from '../../components/Form/PersonTypeButton'
import * as S from './styles'

export function Register() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <PersonTypeButton type="physical_person"/>
          <PersonTypeButton type="legal_person"/>
          <Input 
            placeholder='Nome Completo'
          />
          <Input 
          placeholder='Data de nascimento'
          />
          <Input 
          placeholder='Gênero'
          />
          <Input 
          placeholder='CPF'
          />
          <Input 
          placeholder='Documento de identidade'
          />
          <Input 
          placeholder='Endereço'
          />
          <Input 
          placeholder='Numero de Telefone'
          />
          <Input 
          placeholder='Email'
          />
          <Input 
          placeholder='Estado civil'
          />
          <Input 
          placeholder='Profissão'
          />
          <Input 
          placeholder='Nacionalidade'
          />
        </S.Fields>

        <S.ButtonContainer>
          <Button title='Enviar' />
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  )
}