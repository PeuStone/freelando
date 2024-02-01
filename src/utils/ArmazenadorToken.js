const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

export class ArmazenadorToken {
    static definirTokens(accessToken, refreshToken) {
        sessionStorage.setItem(ACCESS_TOKEN, accessToken)
        sessionStorage.setItem(REFRESH_TOKEN, refreshToken)
    }
    static get AccessToken() {
        return sessionStorage.getItem(ACCESS_TOKEN)
    }
    static get RefreshToken() {
        return sessionStorage.getItem(REFRESH_TOKEN)
    }
}