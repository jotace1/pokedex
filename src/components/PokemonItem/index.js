import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Box,BoxImg, Button, TypesBox, TypeName } from './styles';

const PokemonItem = ({name, url}) => {
    const [ types, setTypes ] = useState([]);

    let id = url;
    if(url.length > 7){
    id = url.slice(34,-1);
    }
    const newName = name[0].toUpperCase() + name.substring(1);

    async function LoadItem(url){
        const response = await axios.get(url);

        const types = response.data.types.map(type => type.type.name);


        setTypes(types);

    }

    useEffect(() => {
        LoadItem(url);
    }, [url])

    return (
        <Button to={`/pokemons/${id}`}>
            <Box>
                <BoxImg>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon" />
                </BoxImg>
                    <p>{newName}</p>
                    <TypesBox>{types.map(type => <TypeName type={type}>{type}</TypeName>)}</TypesBox>
            </Box>
            </Button>
    )
}

export default PokemonItem;
