import styled from "@emotion/styled"
import { Tipografia } from "../../componentes/Tipografia"
import ClienteConcluido from './assets/cliente-concluido.png'
import { Col, Row } from "react-grid-system"
import { Link } from "react-router-dom"
import { Botao } from "../../componentes/Botao"

const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`

const Concluido = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Tipografia variante="h1" componente="h1">
                    Seu perfil está completo!
                </Tipografia>
                <Tipografia variante="body" componente="body">
                    Agora é só começar a se conectar com os melhores freelancers do mercado!
                </Tipografia>
            </div>
            <figure>
                <ImagemEstilizada src={ClienteConcluido} alt="" />
            </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <Link to='/cadastro'>
                        <Botao variante="secundaria">
                            Voltar para a home
                        </Botao>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default Concluido