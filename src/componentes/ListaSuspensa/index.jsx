import styled from "@emotion/styled"
import { useState } from "react"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;

`

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.estaAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estaAberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`

const ListaSuspensaEstilizada = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.cores.branco};
    z-index: 1;
    border: 1px solid ${props => props.theme.cores.neutras.a};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    margin: 0;
    padding: 0 ${props => props.theme.espacamentos.m};
    list-style: none;
`

const ItemListaSuspensaEstilizado = styled.li`
    padding: ${props => props.theme.espacamentos.xs} 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.cores.neutras.c};
    cursor: pointer;
    &:last-child {
        border: none;
    }
    &:hover {
        color: ${props => props.theme.cores.focus};
    }
    color: ${props => props.focoAtivo ? props.theme.cores.focus : 'inherit'};
`

export const ListaSuspensa = ({ titulo, opcoes, valor, onChange }) => {
    const [estaAberta, alternarVisibilidade] = useState(false)
    const [opcaoFocada, setOpcaoFocada] = useState(null)

    const manipularTeclaTeclado = (evento) => {
        alternarVisibilidade(true)
        switch (evento.key) {
            case 'ArrowDown':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (!focoAntigo === null) {
                        return 0;
                    }
                    if (focoAntigo === (opcoes.length - 1)) {
                        return opcoes.length - 1
                    }
                    return focoAntigo += 1
                })
                break;
            case 'ArrowUp':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (!focoAntigo) {
                        return 0;
                    }
                    return focoAntigo -= 1
                })
                break;
            case 'Enter':
                evento.preventDefault();
                setOpcaoFocada(null)
                alternarVisibilidade(false)
                onChange(opcoes[opcaoFocada])
                break;
            case 'Tab':
            case 'Escape':
                evento.preventDefault();
                setOpcaoFocada(null)
                alternarVisibilidade(false)
                break;
            default:
                break;
        }
    }

    return (
        <LabelEstilizada>
            {titulo}
            <BotaoEstilizado
                estaAberta={estaAberta}
                onClick={() => alternarVisibilidade(!estaAberta)}
                onKeyDown={manipularTeclaTeclado}
                type="button"
            >
                <div>
                    {valor ? valor.text : 'Selecione'}
                </div>
                <div>
                    <span>{estaAberta ? '▲' : '▼'}</span>
                </div>
            </BotaoEstilizado>
            {estaAberta && <ListaSuspensaEstilizada>
                {opcoes.map((opcao, index) =>
                    <ItemListaSuspensaEstilizado
                        key={opcao.value}
                        focoAtivo={index === opcaoFocada}
                        onClick={() => onChange(opcao)}
                    >
                        {opcao.text}
                    </ItemListaSuspensaEstilizado>)}
            </ListaSuspensaEstilizada>}
        </LabelEstilizada>
    )
}