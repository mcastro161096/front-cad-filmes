import axios from 'axios';

const Api =  axios.create({
baseURL: //'https://localhost:44363/api/filmes'
'https://apicadfilmesapi1.azure-api.net/api/filmes/'
});

export default Api;