import styled from 'styled-components'


export const Container = styled.div`
display: flex;
align-items: center;
margin-top: 5rem;
flex-direction: column;
`

export const Content = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;

`

export const Input = styled.input `
border: 1px solid #ddd;
height: 2.5rem;
width: 50%;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;

&:focus, &:active {
    outline: none;
    box-shadow: none;
}
` 

export const Button = styled.button `
height: 2.5rem;
border: none;
width: 7rem;
background-color: #e31212;
color: #fff;
border-radius: 0 .25rem  .25rem 0;
font-weight: bold;

&:focus, &:active {
    outline: none;
    box-shadow: none;
}
`

export const P = styled.span `
display: block;
font-size: 1rem;
color: green;
font-weight: 600;
margin-top: 1rem;
`

export const Msg = styled.span `
display: block;
font-size: 1rem;
color: red;
font-weight: 600;
margin-top: 1rem;
`