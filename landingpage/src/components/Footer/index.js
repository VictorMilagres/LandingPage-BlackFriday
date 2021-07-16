import React from 'react'
import * as S from './styled'
import imgFace from '../../assets/facebook.png'
import imgInsta from '../../assets/instagram.png'
import imgTwitter from '../../assets/twitter.png'
import img from '../../assets/blackfriday.png'

const Footer = () => {
    return (
        <S.Container>
                <img src={img}/>
                <h2>Todos os direitos reservados ©</h2>
            <S.DivRede>
                <h3>Acompanhe nas redes sociais:</h3>
                <img src={imgFace}/>
                <img src={imgInsta}/>
                <img src={imgTwitter}/>
            </S.DivRede>
        </S.Container>
    )
}

export default Footer
