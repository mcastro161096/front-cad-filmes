import React, { Component } from 'react';
import CardFilme from '../CardFilme/';
import Api from '../Api'
import './style.css';
//import axios from 'axios';

export default class HomePage extends Component
{
state = {
    filmes: [],
}
state1 = {generos: [],
}
async componentDidMount()
{
    
    try {

        const response = await Api.get('');
       // console.log(response.data);
        this.setState({ filmes: response.data });
    } catch (error) {
        console.log(error);

    }
    
        try {
            const resp =  Api.get('https://apicadfilmesapi1.azure-api.net/api/generos');
            this.setState({generos: resp.data});
            ///console.log(resp.data);
            
        } catch (error) {
            console.log(error);
        }
    
    
    

}

    render(){
        const {filmes} = this.state;
        const {generos} = this.state1;
        
        
       
       // console.log(filmes);
    return (
        <div className="home-page">
            {filmes.map(filme => (

                <CardFilme
                    nome={filme.nome}
                    dataCriacao={filme.dataCriacao}
                    ativo={filme.ativo}
                    genero={filme.generoId} />

            ))}
           
        </div>

    );
    }
}