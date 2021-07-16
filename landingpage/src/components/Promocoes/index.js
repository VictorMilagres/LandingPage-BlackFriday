import React from 'react'
import * as S from './styled'

import imgCel from '../../assets/celularbg.png'
import imgGames from '../../assets/gamesbg.png'
import imgLivros from '../../assets/livrosbg.png'

const Promocoes = () => {
    return (
        <S.Container>
            <h2>Vem aí a maior Black Friday de livros, games e tecnologia!</h2>
            <S.Content>
                <S.Card>
                    <img src={imgCel}/>
                    <h3>Ofertas de TVs, celulares e notebooks</h3>
                    <p>
                    Não tem jeito, a BF é quase sinônimo de compra de eletrônicos, 
                    principalmente pra trocar o seu smartphone, Smart TV ou computador antiga por novos. 
                    Essa dica vale ouro: pesquise desde agora qual aparelho você quer pra não ficar em dúvida e 
                    comprar ele na Black Friday 2021. Quem avisa amigo é, hein!
                    </p>
                </S.Card>
                <S.Card>
                    <img src={imgGames}/>
                    <h3>Games com o melhor preço</h3>
                    <p>
                    Não tem oportunidade melhor do que na Black Friday 2021 pra você comprar seus próximos games em promoção.
                    Aqui no Sub tem títulos pra PlayStation®4, PlayStation®5, Xbox e Nintendo Switch. 
                    Ah, se você é mais de jogos pra celular, não tem problema!
                    Aqui também tem Gift Cards de diversas plataformas e lojas virtuais. Chega mais e press start!
                    </p>
                </S.Card>
                <S.Card>
                    <img src={imgLivros}/>
                    <h3>Livros em promoção</h3>
                    <p>
                    Sabe a coleção completa do seu autor(a) favorito(a) ou aquele box de livros com vários brindes exclusivos? 
                    Então, na Black Friday 2021 do Submarino você pode levar todos eles em promoção. 
                    Fica a dica: chega lá nas redes sociais e pede aquele cupom de desconto que rolou nos anos anteriores. 
                    Quem sabe o seu pedido não é realizado?
                    </p>
                </S.Card>
            </S.Content>
        </S.Container>
    )
}

export default Promocoes
