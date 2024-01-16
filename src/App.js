import { Card } from "./componentes/Card";
import { Estilos } from "./componentes/EstilosGlobais";
import { ProvedorTema } from "./componentes/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
