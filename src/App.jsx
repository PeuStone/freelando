import { RouterProvider } from "react-router-dom"
import { router } from "./Router/router"
import { ProvedorTema } from "./componentes/ProvedorTema"
import { Estilos } from "./componentes/EstilosGlobais"

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />
    </ProvedorTema>
  )
}

export default App