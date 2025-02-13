import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesses from "../paginas/cadastro/Interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Concluido from "../paginas/cadastro/Concluido";
import PaginaInicial from '../paginas/PaginaInicial/PaginaInicial';
import Pagina404 from "../paginas/Pagina404";
import PaginaLogin from "../paginas/Login";
import PaginaPerfil from "../paginas/area-logada/PaginaPerfil";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: Pagina404,
        children: [
            {
                path: '',
                element: <PaginaInicial />
            },
            {
                path: 'login',
                element: <PaginaLogin />
            },
            {
                path: 'area-logada',
                children: [
                    {
                        path: 'perfil',
                        element: <PaginaPerfil />
                    }
                ]
            },
            {
                path: 'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />,
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    },
]);