import React, { useState, useEffect } from 'react'
import Wrapper from 'components/Wrapper'
import Toggle from 'components/Toggle'
import Input from 'components/Input'
import Button, { STYLE } from 'components/Button'
import { Container, Content, Fluid, Text, Space, Line, LabelBold } from './styles'
import { useLoginQuery } from 'api/user'

const Login = () => {
    const [mode, setMode] = useState<string>('Email')
    const [input, setInput] = useState<string>('')
    const { data, error, isLoading, refetch } = useLoginQuery({ email: input })

    const onFetchUser = () => {
        if (input) {
            refetch()
        } else {
            // show error msg
        }
    }

    useEffect(() => {
        if (data && data.userExist) {
            // navigate to next step
        }
    }, [data])

    return (
        <Wrapper title={'HomePage'} titleBlue={'Home'}>
            <Container>
                <Content>
                    <Space bottom={30}>
                        <Toggle
                            values={['Email', 'Phone']}
                            selected={mode}
                            onChange={(v) => setMode(v)}
                        />
                    </Space>
                    <Space bottom={20}>
                        <Fluid space={'max'}>
                            <Input
                                placeholder={mode === 'Email' ? 'john@gmail.com' : 'Ex (337) 378 8383'}
                                onChange={(v: string) => setInput(v)}
                            />
                        </Fluid>
                    </Space>
                    <Space bottom={25}>
                        <Fluid space={'min'}>
                            <Button
                                label="Continue"
                                onClick={() => onFetchUser()}
                                styleMode={STYLE.MAIN}
                            />
                        </Fluid>
                    </Space>
                    <Space bottom={20}>
                        <Fluid space={'max'}>
                            <Text>{`by clicking continue you must agree to near labs `}<Text blue>{`Terms & Conditions `}</Text>{` and `}<Text blue>{'Privacy Policy'}</Text></Text>
                        </Fluid>
                    </Space>
                    <Line />
                </Content>
                <Content>
                    <Space bottom={20}>
                        <Fluid space={'max'}>
                            <LabelBold>Already have NEAR account?</LabelBold>
                        </Fluid>
                    </Space>
                    <Space bottom={25}>
                        <Fluid space={'max'}>
                            <Button
                                label="Log in with NEAR"
                                onClick={() => alert(1)}
                                styleMode={STYLE.DARK}
                            />
                        </Fluid>
                    </Space>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default Login