import React from 'react';
import axios from 'axios';
import './DetalheComic.css'

export default class DetalheComic extends React.Component {

    state = {
        titulo: "carregando..",
        descricao: "carregando..",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" //imagem default
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('http://gateway.marvel.com/v1/public/comics/'+ id +'?ts=2&apikey=d65c09eeddf46d95a8583219d544ef23&hash=0f92b9881af8283ee90374b66d3078df')
          .then(res => {
            const comic = res.data.data.results[0];
            const desc = comic.description !== undefined ? comic.description : "Descrição não fornecida pela Marvel Comics";
            this.setState({ titulo: comic.title, descricao: desc});
            this.setState({imgLink: comic.thumbnail.path + "/portrait_incredible.jpg"});
            
        })     
    }   

    render() {
        return (
            <div data-testid="detalhe-body" className="detalhe-body">
                <img data-testid="capa-comic" alt="Capa do comic" src={this.state.imgLink} />
                <span>
                Título: {this.state.titulo}
                </span>
                <br/>
                <span>
                    Descrição: {this.state.descricao}
                </span>
            </div>
        );
    }
}