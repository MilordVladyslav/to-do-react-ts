import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'
import reset from 'styled-reset'

export const AppWrapper  = styled.div`
    // background: rgb(107,139,184);
    // background: linear-gradient(347deg, rgba(107,139,184,1) 0%, rgba(56,65,113,1) 72%);
    background-color: #585f7c;
    width: 100vw;
    min-height: 100vh;
`

export const Container = styled.div`
    max-width: 480px;
    min-height: 120px;
    margin:auto;
    background-color: #3c424a;
`
export const GlobalStayle = createGlobalStyle`
    ${reset}
`

export const TaskContent = styled.div`
    padding: 15px;
    color:#c0bfbf;
    font-family: Arial;
`

export const Header = styled.div`
`

export const Content = styled.div`
`

export const List = styled.div`
` 

export const FormContainer = styled.div`
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
`

export const TaskInput = styled.input`
    background: #25282d;
    color: #c0bfbf;
    border: none;
    font-size: 16px;
    padding: 10px;
    display: block;
    width: 76%;
` 
export const AddButton = styled.button`
    font-size: 16px;
    padding: 10px 0px;
    border: none;
    background: #c0bfbf;
    width: 15%;
    font-family: Arial;
    color: #3c424a;
` 
//form
//display: block;
//justify-content: center;

// input
// background: #25282d;
//     color: #c0bfbf;
//     border: none;
//     font-size: 16px;
//     padding: 10px;
//     display: block;
//     width: 76%;
// }

// button
// font-size: 16px;
//     padding: 10px 0px;
//     border: none;
//     background: #c0bfbf;
//     width: 15%;
//     font-family: Arial;
//     color: #3c424a;
// }