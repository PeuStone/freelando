import styled from "@emotion/styled"
import logo from './assets/Logo.png'

const HeaderEstilizado = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BotaoEstilizado = styled.button`
    border: none;
    background: ${props => props.theme.cores.primarias.a};
    color: ${props => props.theme.cores.neutras.c};
    font-size: 20px;
`

export const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <div>
                <img src={logo} alt="Logo da Freelando" />
            </div>
            <div>
                <BotaoEstilizado>Login</BotaoEstilizado>
            </div>
        </HeaderEstilizado>
    )
}