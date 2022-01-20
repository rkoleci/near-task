import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Content, Title, SubTitle, Logo } from './styles'

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('login')
        }, 3000)
    }, [])

    return (
        <Container>
            <Content />
            <Content >
                <Title>HomePage</Title>
                <SubTitle>a web3 gateway to hidden experiences</SubTitle>
            </Content>
            <Content bottom>
                <div>
                    <SubTitle>powered by</SubTitle>
                    <Logo>NEAR</Logo>
                </div>
            </Content>
        </Container>
    )
}

export default Splash