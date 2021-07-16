import { React, useState } from 'react'
import * as S from './styled'


const Email = () => {
  const [usuario, setUsuario] = useState('');
  const [cadastro, setCadastro]  = useState(false);
  
  function handleCadastro(e){
    e.preventDefault();
   const emailName = usuario;
    localStorage.setItem('emailName', JSON.stringify(emailName))

    if(!usuario){
      alert('Cadastre um E-mail válido!')
    }else{
      return alert('E-mail cadastrado com sucesso!')
    }
  }

    return (
        <S.Container>
           <h2>Cadastre-se pra aproveitar as melhores ofertas da Black Friday 2021:</h2>
        <S.Content>
          <S.Input 
          type="email" 
          name="email" 
          className="usuarioInput" 
          placeholder="Digite seu E-mail:" 
          value={usuario} 
          onChange={e => setUsuario(e.target.value)}
          required
          />
          <S.Button type='button' onClick={handleCadastro}>Cadastrar</S.Button>
        </S.Content>     
      </S.Container>
    )
}

export default Email;
