export const apiUrl = 'http://localhost:8000';
export const apiUrlLogin = apiUrl + '/oauth/token';
export const userUrl = apiUrl + '/correntista/';

export const getHeader = function () {

    const tokenData = JSON.parse(window.localStorage.getItem('usuarioAutorizado'));
    const header = {
        'Accept' : 'application/json',
        'Authorization' : 'Bearer '  + tokenData.access_token
    }

    return header;
}