import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    margin: 0; 
    display: flex;
    flex-direction: column; 
    padding-right: 10%;
    padding-top: 20px;
` 
export const Content = styled.div` 
    flex: 1;
    text-align: center; 
    
`

interface SpaceProps {
    bottom: number
}

export const Space = styled.div<SpaceProps>`
    margin-bottom: ${props => props.bottom}px;
`   

interface FluidProps {
    space: string
}

export const Fluid = styled.div<FluidProps>`
    width: 80%;
    padding-left: 10%;
    padding-right: 10%
  
`
interface TextProps {
    blue?: boolean
}

export const Text = styled.p<TextProps>`
    color: ${props => props.blue ? '#885FFF' : '#6F6E73'};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px; 
    margin: 0;
    display: inline-block;
`

export const Line = styled.div`
    height: 1px;
    width: 120%;  
    background:  #DFDFE0;
`

export const LabelBold = styled.p`
    color: #414047;
    text-align: center; 
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
`