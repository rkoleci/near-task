import styled from 'styled-components'
import { STYLE } from './index'

interface CustomButtonProps {
    styleMode: number
}

export const CustomButton = styled.div<CustomButtonProps>`
    background: ${props => props.styleMode === STYLE.MAIN ? '#885FFF' : ' #414047'};
    border-radius: 8px;
    padding: 8px 10px; 
    display: inline-block;
`

export const Label = styled.p`
    font-size: 15px;
    color: white;
    font-weight: normal; 
    margin: 0;
    text-align: left;  

    &:after {
        content: ">";
        margin-left: 20px;
      }
`