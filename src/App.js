import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "./componentes/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto";
import { Card } from "./componentes/Card";
import { Estilos } from "./componentes/EstilosGlobais";
import { ProvedorTema } from "./componentes/ProvedorTema";
import { Rodape } from "./componentes/Rodape";
import { Tipografia } from "./componentes/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Container>
        <Row justify="center">
          <Col lg={6}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <CampoTexto titulo="Nome Completo" />
            </Card>
          </Col>
        </Row>
      </Container>
      <Rodape />
    </ProvedorTema>
  );
}

export default App;
