import React, { FC } from 'react'
import { Container, Header, Title, CloseIcon } from './styles'

interface IProps {
    title: string,
    children: React.ReactNode,
}

const Wrapper: FC<IProps> = ({ children, title }) => {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <CloseIcon />
            </Header>
            {children}
        </Container>
    )
}

export default Wrapper