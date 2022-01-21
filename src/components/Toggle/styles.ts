import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 10%;
    padding-right: 10%;
`

interface ToggleItemProps {
    border?: boolean
}

export const ToggleItem = styled.div<ToggleItemProps>`
    padding: 6px 12px;
    border-radius: 8px;
    ${props => props.border ? 'border: 1px solid #BEBEC2' : ''}
    
`

export const Title = styled.p`
    color: #414047;
    font-size: 14px;
    margin: 0;
`