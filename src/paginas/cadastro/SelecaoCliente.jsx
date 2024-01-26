import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia"
import { Link } from '../../componentes/Link'
import { Link as RouterLink } from 'react-router-dom'

import cliente from './assets/cliente.png'
import freelancer from './assets/freela.png'
import GrupoTipografia from "../../componentes/GrupoTipografia"

const SelecaoCliente = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <GrupoTipografia
                titulo={"Crie seu cadastro"}
                subtitulo={" Como podemos te ajudar? "}
            />
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to='interesses'>
                        <img src={cliente} alt="" />
                        <Tipografia variante="body" componente="body">
                            Sou cliente e preciso de um freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freelancer} alt="" />
                    <Tipografia variante="body" componente="body">
                        Sou freela e preciso de um cliente!
                    </Tipografia>
                </Col>
            </Row>
            <div>
                <Tipografia variante="body2" componente="body2">
                    Já tem conta?
                </Tipografia>
                <p>
                    <Link variante="secundaria"> Faça Login! </Link>
                </p>
            </div>
        </div>
    )
}

export default SelecaoCliente