import React, { FC } from 'react'
import { Container, ToggleItem, Title } from './styles'

interface IProps {
    values: string[],
    selected: string,
    onChange: (value: string) => void
}

const Toggle: FC<IProps> = ({ values, selected, onChange }) => {
    console.log(values, selected)
    return (
        <Container>
            {values.map(v => (
                <ToggleItem border={selected == v} onClick={() => onChange(v)}>
                    <Title>{v}</Title>
                </ToggleItem>
            ))}
        </Container>
    )
}

export default Toggle