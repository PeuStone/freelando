import { RouterProvider } from "react-router-dom"
import { router } from "./Router/router"
import { ProvedorTema } from "./componentes/ProvedorTema"
import { Estilos } from "./componentes/EstilosGlobais"
import { SessaoUsuarioProvider } from "./contexto/SessaoUsuario"

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <SessaoUsuarioProvider>
        <RouterProvider router={router} />
      </SessaoUsuarioProvider>
    </ProvedorTema>
  )
}

export default App