import styled from 'styled-components'

export const Container = styled.div `
 width: 100%;
 text-align: center;
 
 h2{
     margin: 7rem 0;
 }
`

export const Content = styled.div `
display: flex;
`

export const Card = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;

    img{
        height: 12rem;
        margin-bottom: 1rem;
    }

    h3{
        margin-bottom: 1rem;
    }

    p{
        font-size: 0.75rem;
        margin-top: 1rem;
    }
`
