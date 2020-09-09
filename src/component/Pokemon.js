import React, { Component } from 'react';
import axios from 'axios';
import './Pokemon.css';



class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: [],
            name: [],
            stats: [],
            moves: [],
            types: [],
            weight: [],
            height: [],
            listPokemon: [],
            exp: []
        };
    }

    
    

    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then(res => {
                const image = res.data.sprites.other.dream_world;
                const name = res.data.name
                const stats = res.data.stats
                const moves = res.data.moves
                const types = res.data.types
                const height = res.data.height
                const weight = res.data.weight
                const exp = res.data.base_experience
                this.setState({ image });
                this.setState({ name });
                this.setState({ stats });
                this.setState({ moves });
                this.setState({ types });
                this.setState({ height });
                this.setState({ weight });
                this.setState({ exp });
            })
    }
    render() {

        return (
            <div className="ovflw m-5" >
                <h1 className="text-center text-danger">{this.state.name}</h1>
                <div className="d-flex justify-content-around border w-100">
                
                
                    <img className="imgPok" src={this.state.image.front_default} alt="" />
                    <div className="m-4">
                        <table className="table table-hover border">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">HP</th>
                                    <th scope="col">Attack</th>
                                    <th scope="col">Defense</th>
                                    <th scope="col">Special-attack</th>
                                    <th scope="col">Special-defense</th>
                                    <th scope="col">Speed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Base Stat</th>
                                    {this.state.stats.map(stat => <td className="border p-4 m-1 rounded">{stat.base_stat}</td>)}
                                </tr>
                                <tr>
                                    <th scope="row">Effort</th>
                                    {this.state.stats.map(stat => <td className="border p-4 m-1 rounded">{stat.effort}</td>)}
                                </tr>

                            </tbody>
                        </table>
                        <div className="d-flex justify-content-around">
                            <div className="w-50 m-3">
                                <h3 className="list-group-item">Moves</h3>
                                <ul className="move list-group">

                                    {this.state.moves.map(move => <li className="list-group-item">{move.move.name}</li>)}
                                </ul>
                            </div>
                            <div className="w-50 m-3">
                                <div className="m-3">
                                    <h3 className="list-group-item">Type de pokemon</h3>
                                    <ul className="list-group">

                                        {this.state.types.map(type => <li className="list-group-item">{type.type.name}</li>)}
                                    </ul>
                                </div>
                                <div className="m-3">
                                    <table className="table table-hover border">
                                        <thead>
                                            <tr>
                                                <th scope="col">Taille</th>
                                                <th scope="col">Poids</th>
                                                <th scope="col">Experience</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >{this.state.height}</td>
                                                <td >{this.state.weight}</td>
                                                <td >{this.state.exp}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="float-right">
                                    <button className="btn btn-info m-3" onClick={() => {
                                        this.state.listPokemon.unshift(localStorage.getItem('favoris'))
                                        this.state.listPokemon.unshift(this.state.name)
                                        localStorage.setItem('favoris', this.state.listPokemon);
                                        this.state.listPokemon.splice(0)
                                        document.location.reload(true);
                                    }}>
                                        Ajouter à mes favoris.
                                        
                                    </button>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}


export default Pokemon