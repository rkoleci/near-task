import React from 'react'
import { useLoginQuery } from 'api/user'

const Login = () => {
    const { data, error, isLoading } = useLoginQuery('login')
    
    return (
        <h3>Logn</h3>
    )
}

export default Login