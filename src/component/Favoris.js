import React from 'react';
import axios from 'axios';
import './Pokemon.css';




class Favoris extends React.Component {
    state = {
        favoris: [],
        favoris1: [],
        favStorage: localStorage.getItem('favoris').split(','),
        allFavs: []
    }

    componentDidMount() {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.favStorage[this.state.favStorage.length - 2]}`)
            .then(res => {
                const favoris1 = res.data;
                this.setState({ favoris1 });
            })
        for (let i = 0; i < this.state.favStorage.length; i++) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.favStorage[i]}`)
                .then(res => {
                    const favoris = res.data.name;
                    this.setState({ favoris });
                    if (this.state.allFavs.indexOf(this.state.favoris) === -1) {
                        this.state.allFavs.unshift(this.state.favoris)
                    }
                })

        }
        console.log(this.state.allFavs)
    }


    render() {

        return (
            <div>
                <h1 className="text-danger text-center">Mes Pokemon Favoris</h1>
                <div className="ovflw d-flex ml-5 mr-5 mt-5" >
                    <a className="border-bottom m-3 pb-2" href={`/pokemon/${this.state.favoris1.name}`}>
                        <h4>{this.state.favoris1.name}</h4>
                    </a>                    {this.state.allFavs.map(allFav =>
                        <a className="border-bottom m-3 pb-2" href={`/pokemon/${allFav}`}>
                            <h4>{allFav}</h4>
                        </a>

                    )}
                </div>


            </div>
        )
    }

}

export default Favoris
