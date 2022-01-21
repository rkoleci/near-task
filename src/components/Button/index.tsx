import React from 'react'
import { CustomButton, Label } from './styles'

export enum STYLE {
    MAIN = 1,
    DARK = 2,
}

interface IProps {
    label: string,
    onClick(): void
    styleMode: number
}

const Button: React.FC<IProps> = ({ label, onClick, styleMode }) => {

    return (
        <CustomButton onClick={() => onClick()} styleMode={styleMode}>
            <Label>{label}</Label>
        </CustomButton>

    )
}

export default Button