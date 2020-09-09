import React from 'react';
import './Pokemon.css';



class Title extends React.Component {
    render() {
        return (
            <div className="border-bottom p-3 h-25">
                <a className="d-flex justify-content-between" href="/">
                    <img className="imgPoke" src="https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png" alt="" />
                    <img className="imgPoke" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" alt="" />
                    <img className="imgPokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt=""/>
                    <img className="imgPoke" src="https://www.pokepedia.fr/images/c/c6/Sprite_004_HOME.png" alt="" />
                    <img className="imgPoke" src="https://www.pokepedia.fr/images/c/cc/Carapuce-RFVF.png" alt="" />
                    </a>
            </div>

        );
    }
}

export default Title;