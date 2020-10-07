import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/Pokédex_logo.png';

import { Header, Main, Container, Info, Details } from './styles';

const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState([]);
    const [type, setType] = useState('');
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [ability, setAbility] = useState('');
    const {params} = useRouteMatch();
    

    useEffect(()=>{
     api.get(`${params.pokemon}`).then(response => {
        setPokemon(response.data);

        const newName = response.data.name[0].toUpperCase() + response.data.name.substring(1);


        setName(newName);
        setImg(response.data.sprites.other.dream_world.front_default)
        setType(response.data.types[0].type.name.toUpperCase());
        setAbility(response.data.abilities[0].ability.name.toUpperCase());

      });

      
    },[params.pokemon]);

    

    return(
        <>
        <Header>
            <Link to="/"><img src={logoImg} alt="logo" /></Link>
        </Header>
        <Main>
            <Container>

                <img src={img} alt="Pokemon"/>

                <Info>
                <h1>{name}</h1>
                
                <Details>
                    <div>
                        <h3>Type: </h3>
                        <span>{type}</span>
                    </div>

                    <div>
                        <h3>Height: </h3>
                        <span>{pokemon.height} decimeters</span>
                    </div>

                    <div>
                        <h3>Weight:</h3>
                        <span>{pokemon.weight} hectograms</span>
                    </div>

                    <div>
                        <h3>Abilities:</h3>
                        <span>{ability}</span>
                    </div>
                </Details> 

              </Info>
            </Container>
        </Main>
        </>
    );
}

export default PokemonInfo;