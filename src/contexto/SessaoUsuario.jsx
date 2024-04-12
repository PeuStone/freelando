import { useContext, createContext, useState } from "react";
import http from "../http";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";

const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    login: (email, senha) => null,
    logout: () => null,
    perfil: {}
})

export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext)
}

export const SessaoUsuarioProvider = ({ children }) => {
    const [usuarioLogado, setUsuarioLogado] = useState(!ArmazenadorToken.accessToken)

    const login = (email, senha) => {
        http.post('auth/login', {
            email,
            senha
        })
            .then(resposta => {
                ArmazenadorToken.definirTokens(
                    resposta.data.access_token,
                    resposta.data.refresh_token,
                )
                setUsuarioLogado(true)
            })
            .catch(erro => console.error(erro))
    }

    const logout = () => {
        ArmazenadorToken.efetuarLogout()
        setUsuarioLogado(false)
    }

    const value = {
        login,
        usuarioLogado,
        logout
    }
    return (
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    )
}