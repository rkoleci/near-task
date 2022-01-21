import React, { FC } from 'react'
import { MainContainer, Container, Header, Title, TitleBlue, } from './styles'

interface IProps {
    title: string,
    titleBlue: string,
    children: React.ReactNode,
}

const Wrapper: FC<IProps> = ({ children, title, titleBlue }) => {
    return ( 
        <Container>
            <Header>
                <Title><TitleBlue>{titleBlue}</TitleBlue>{title.replaceAll(titleBlue, '')}</Title> 
            </Header>
            {children}
        </Container> 
    )
}

export default Wrapper