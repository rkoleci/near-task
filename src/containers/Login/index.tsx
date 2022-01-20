import React from 'react'
import Wrapper from 'components/Wrapper'
import { useLoginQuery } from 'api/user'

const Login = () => {
    const { data, error, isLoading } = useLoginQuery('login')
    
    return (
        <Wrapper title="HomePage">
            Login Page
        </Wrapper>
    )
}

export default Login