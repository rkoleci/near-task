import React from 'react'
import { CustomInput } from './styles'

interface IProps {
    placeholder: string,
    onChange(value: string): any
}

const Input: React.FC<IProps> = ({ placeholder, onChange }) => {

    return (
        <CustomInput
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
        />
    )
}

export default Input