import React from 'react'
import imgLogo from '../../assets/blackfriday.png'

import { Container, Content, Logo } from './styled';


const  Header = () => {
    return (
        <Container>
         <Content>
           <Logo>
               <img src={imgLogo} alt="Gama Friday"/>
               <span>Friday</span>
           </Logo>
        </Content>
    </Container>
    )
}

export default Header;
