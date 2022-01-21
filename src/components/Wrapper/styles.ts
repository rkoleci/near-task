import styled from 'styled-components'   
import {CloseCircle} from '@styled-icons/evaicons-solid'

export const MainContainer = styled.div`
    height: 100%;
    margin: 0;
    background: red;
`

export const Container = styled.div` 
    background: white; 
    height: 100%;
`

export const Header = styled.div`
    background: #F5F5F5;
    border-bottom: 1px solid #DFDFE0; 
    position: relative; 
    display: flex;
    align-items:center;
    justify-content: center;
`

export const Title = styled.h3`
    color: black; 
    text-align: center; 
    
`

export const TitleBlue = styled.span`
    color: #B072FF;
`
 
export const Close = styled(CloseCircle)`
    color: #818C99; 
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

`