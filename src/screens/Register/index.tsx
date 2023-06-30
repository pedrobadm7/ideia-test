import { Input } from '../../components/Form/Input'
import * as S from './styles'

export function Register() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <Input 
          placeholder='Nome Completo'
        />
          <Input 
          placeholder='Nome Completo'
        />
      </S.Form>
    </S.Container>
  )
}