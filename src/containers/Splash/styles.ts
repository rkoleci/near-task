import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    margin: 0;
    background: linear-gradient(#e66465, #9198e5);
    display: flex;
    flex-direction: column; 
`

interface ContentProps {
     bottom?: boolean;
}
   
export const Content = styled.div<ContentProps>` 
    flex: 1;
    ${props => props.bottom ? 'display: flex' : ''};
    ${props => props.bottom ? 'align-items: flex-end' : ''};
    ${props => props.bottom ? 'justify-content: center' : ''};
    text-align: center;
    padding: 16px;
`

export const Title = styled.h2`
    color: white;
    margin-bottom: 0;
    font-weight: bold;
`
export const SubTitle = styled.p`
    color: white; 
`

export const Logo = styled.h3`
    text-transform: uppercase;
    color: white;
    margin;
`