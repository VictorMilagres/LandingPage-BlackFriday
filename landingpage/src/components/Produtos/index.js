import React from 'react'
import * as S from './styled'

import imgIphone from '../../assets/iphone11.jpg'
import imgS20 from '../../assets/S20.jpg'
import imgPH from '../../assets/poderhabito.jpg'
import imgBox from '../../assets/boxsherlock.jpg'
import imgNba from '../../assets/nba.jpg'

const Produtos = () => {
    return (
        <S.Container>
            <h2>Conheça um pouco nossas promoções!</h2>
            <S.Content>
                <S.Card>
                    <img src={imgIphone}/>
                    <h3>Iphone11</h3>
                    <p>20% de Desconto</p>
                    <span>R$ 5.000,00</span> 
                </S.Card>
                <S.Card>
                    <img src={imgS20}/>
                    <h3>Samsung S20</h3>
                    <p>20% de Desconto</p>
                    <span>R$ 2.500,00</span> 
                </S.Card>
                <S.Card>
                    <img src={imgPH}/>
                    <h3>Livro O Poder do Hábito</h3>
                    <p>30% de Desconto</p>
                    <span>R$50,00</span> 
                </S.Card>
                <S.Card>
                    <img src={imgBox}/>
                    <h3>Box Sherlock Holmes</h3>
                    <p>10% de Desconto</p>
                    <span>R$ 79,00</span> 
                </S.Card>
                <S.Card>
                    <img src={imgNba}/>
                    <h3>Jogo Nba 2021</h3>
                    <p>20% de Desconto</p>
                    <span>R$ 200,00</span> 
                </S.Card>
            </S.Content>
    </S.Container>
    )
}

export default Produtos;
