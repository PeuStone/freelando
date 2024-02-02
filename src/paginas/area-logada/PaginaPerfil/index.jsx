import styled from "@emotion/styled";
import banner from './assets/banner-perfil.png';
import avatar from './assets/avatar.png';
import { Col, Container, Row } from "react-grid-system";
import { Card } from '../../../componentes/Card';
import { Tipografia } from '../../../componentes/Tipografia';
import { CampoTexto } from '../../../componentes/CampoTexto';
import { Botao } from "../../../componentes/Botao";
import { useEffect } from "react";
import http from '../../../http';
import { ArmazenadorToken } from '../../../utils/ArmazenadorToken';

const TituloEstilizado = styled.h1`
    background: url(${banner}) no-repeat;
    margin-top: 0;
    font-weight: 600;
    font-size: 40px;
    background-position: center;
    line-height: 246px;
    text-align: center;
`

const ImagemEstilizada = styled.img`
    max-width: 100%;
    margin: 0 auto;
`

const PaginaPerfil = () => {

    useEffect(() => {
        const token = ArmazenadorToken.AccessToken
        http.get('profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(resposta => console.log(resposta.data))
            .catch(erro => console.error(erro))
    }, [])

    const aoSubmeterFormulario = (evento) => {
        evento.preventDefault()
    }

    return (
        <>
            <TituloEstilizado>
                Meu Perfil
            </TituloEstilizado>
            <Container>
                <form onSubmit={aoSubmeterFormulario}>
                    <Row>
                        <Col sm={12} md={5}>
                            <Card>
                                <div style={{ textAlign: 'center' }}>
                                    <Tipografia componente='h3' variante='h3'>
                                        Nome Completo
                                    </Tipografia>
                                    <ImagemEstilizada src={avatar} />
                                </div>
                            </Card>
                        </Col>
                        <Col sm={12} md={7}>
                            <Tipografia componente='h3' variante='h3'>
                                Revise seus dados
                            </Tipografia>
                            <CampoTexto titulo='Nome' />
                            <CampoTexto titulo='Sobrenome' />
                            <Row>
                                <Col sm={12} md={6}>
                                    <CampoTexto titulo='Celular' />
                                </Col>
                                <Col sm={12} md={6}>
                                    <CampoTexto titulo='Email' tipo="email" />
                                </Col>
                                <Col sm={12} md={6}>
                                    <CampoTexto titulo='Código postal' />
                                </Col>
                                <Col sm={12} md={6}>
                                    <CampoTexto titulo='País' />
                                </Col>
                                <Col sm={12} md={6}>
                                    <Botao>
                                        Salvar
                                    </Botao>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </form>
            </Container>
        </>
    )
}

export default PaginaPerfil