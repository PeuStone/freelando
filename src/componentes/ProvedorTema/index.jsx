import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#FFFFFF',
        atencao: '',
        focus: '#B009FF',
        primarias: {
            a: '#5754ED',
            b: '#D93114',
            c: '#168070'
        },
        secundarias: {
            a: '#F8F8FD',
            b: '#FDF8F8',
            c: '#EBFCF9'
        },
        neutras: {
            a: '#373737',
            b: '',
            c: '#F5F5F5',
            d: ''
        },
        dark: {
            a: '',
            b: '#D93114'
        }
    },
    espacamentos: {
        xs: '8px',
        s: '16px',
        l: '32px',
        m: '24px',
        xl: '48px',
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return (
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}