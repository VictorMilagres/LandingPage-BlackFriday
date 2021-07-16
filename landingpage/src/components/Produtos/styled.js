import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
text-align: center;
margin-top: 8rem;

h2{
    margin-bottom: 5rem;
}
`

export const Content = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export const Card = styled.div `
margin: 1rem 0;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 5rem;
h3, p, span {
    padding-top: 1rem;
}

p{
    color: red;
}

span {
    font-weight: bold;
}

img {
    height: 15rem;
}
`