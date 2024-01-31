import styled from "@emotion/styled";
import GrupoTipografia from "../../componentes/GrupoTipografia";
import imagemError from './assets/erro-404.png';
import LayoutBase from "../LayoutBase";
import { Col, Container, Row } from "react-grid-system";
import { Card } from "../../componentes/Card";
import { Link } from "react-router-dom";
import { Botao } from '../../componentes/Botao'

const ImagemEstilizada = styled.img`
    max-width: 100%;
`

const Pagina404 = () => {
    return (
        <LayoutBase>
            <Container>
                <Row justify="center">
                    <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ marginTop: '48px' }}>
                        <Card>
                            <GrupoTipografia
                                titulo={"Ops... Página não encontrada :("}
                            />
                            <figure style={{ textAlign: "center" }}>
                                <ImagemEstilizada src={imagemError} alt="" />
                            </figure>
                            <GrupoTipografia
                                descricao={"Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!"}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Link to='/'>
                                    <Botao variante="secundaria">
                                        Voltar para a home
                                    </Botao>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </LayoutBase>
    )
}

export default Pagina404