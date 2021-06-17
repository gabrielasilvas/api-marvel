import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class ListagemComics extends React.Component {
    state = {
        comics: []
    }

    componentDidMount() {
        axios.get(`http://gateway.marvel.com/v1/public/comics?ts=2&apikey=d65c09eeddf46d95a8583219d544ef23&hash=0f92b9881af8283ee90374b66d3078df`)
          .then(res => {
            const comics = res.data.data.results;
            this.setState({ comics });
        })     
    }

    render() {
        return (
            <ul data-testid="lista-comics">
                {this.state.comics.map(comic => 
                    <Link key={comic.id} to={"/detalhe/" + comic.id }><li key={comic.id}>{comic.title}</li></Link>
                )}                    
            </ul>
        );
    }
}
