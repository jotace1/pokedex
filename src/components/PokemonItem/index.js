import React from 'react';

import { Box,BoxImg, Button } from './styles';

const PokemonItem = ({name, url}) => {
    let id = url;
    if(url.length > 7){
    id = url.slice(34,-1);
    }
    const newName = name[0].toUpperCase() + name.substring(1);


    return (
        <Button to={`/pokemons/${id}`}>
            <Box>
                <BoxImg>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon" />
                </BoxImg>
                    <p>{newName}</p>
            </Box>
            </Button>
    )
}

export default PokemonItem;