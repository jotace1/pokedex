import React,{ useEffect, useState } from 'react';
import api from '../../services/api';

import TypeButton from '../../components/TypeButton';
import PokemonItem from '../../components/PokemonItem';

import logoImg from '../../assets/Pokédex_logo.png';
import pokeballIcon from '../../assets/logo-icon.png';

import { Header,Form, SearchInput, SearchButton, TypeBox, Main, Container } from './styles';

const Home = () => {
    const [ pokemons, setPokemons ] = useState([]);
    const [ search, setSearch ] = useState('');

    async function getResponse(){
        const response = await api.get('?offset=5&limit=50');

        setPokemons(response.data.results);
    }

    useEffect(()=>{
        getResponse();
    },[]);


    async function handleSearchPokemons(event) {
        event.preventDefault();

        const response = await api.get(`${search}`);
        const pokemon = {
            name: response.data.name,
            url: response.data.id,
        }

        setPokemons([pokemon]);
    }

    async function handleAddFilter(type){

        const response = await api.get(`https://pokeapi.co/api/v2/type/${type}`);

        const newResponse = response.data.pokemon.map(pokemon => {
            return ({name:pokemon.pokemon.name,url: pokemon.pokemon.url });
        })

        setPokemons(newResponse);
    }




    return (
        <>
        <Header>

            <img src={logoImg} alt="logo" />

            <span>
                <img src={pokeballIcon} alt="pokeball" />
                Filter by name
            </span>
            <Form onSubmit={handleSearchPokemons}>
                <SearchInput
                placeholder="Digite o nome do pokemon"
                value={search}
                onChange={e => setSearch(e.target.value)}/>
                <SearchButton type="submit">Filtrar</SearchButton>
            </Form>

            <span id="type">
                <img src={pokeballIcon} alt="pokeball" />
                Filter by type
            </span>
            <TypeBox>
                <div>
                <label onClick={() => handleAddFilter('normal')}><TypeButton color="#B1B1B1" title="NORMAL" /></label>
                <label onClick={() => handleAddFilter('fighting')}><TypeButton color="#B64D19" title="FIGHTING" /></label>
                <label onClick={() => handleAddFilter('flying')}><TypeButton color="#277BA1" title="FLYING" /></label>
                <label onClick={() => handleAddFilter('poison')}><TypeButton color="#823EC3" title="POISON" /></label>
                <label onClick={() => handleAddFilter('ground')}><TypeButton color="#8A8331" title="GROUND" /></label>
                <label onClick={() => handleAddFilter('rock')}><TypeButton color="#715C3D" title="ROCK" /></label>
                 <label onClick={() => handleAddFilter('bug')}><TypeButton color="#2F9651" title="BUG" /></label>
                 <label onClick={() => handleAddFilter('ghost')}><TypeButton color="#83417A" title="GHOST" /></label>
                 <label onClick={() => handleAddFilter('steel')}><TypeButton color="#6C6C6C" title="STEEL" /></label>
                 <label onClick={() => handleAddFilter('fire')}><TypeButton color="#A8282B" title="FIRE" /></label>
                 <label onClick={() => handleAddFilter('water')}><TypeButton color="#145EAB" title="WATER" /></label>
                </div>
                <div>
                 <label onClick={() => handleAddFilter('grass')}><TypeButton color="#7D8545" title="GRASS" /></label>
                 <label onClick={() => handleAddFilter('electric')}><TypeButton color="#BA9A22" title="ELECTRIC" /></label>
                 <label onClick={() => handleAddFilter('psychic')}><TypeButton color="#452A8D" title="PSYCHIC" /></label>
                 <label onClick={() => handleAddFilter('ice')}><TypeButton color="#659DBA" title="ICE" /></label>
                 <label onClick={() => handleAddFilter('dragon')}><TypeButton color="#D57931" title="DRAGON" /></label>
                 <label onClick={() => handleAddFilter('dark')}><TypeButton color="#232424" title="DARK" /></label>
                 <label onClick={() => handleAddFilter('fairy')}><TypeButton color="#BA65A0" title="FAIRY" /></label>
                 <label onClick={() => handleAddFilter('unknown')}><TypeButton color="#9A9A9A" title="UNKNOWN" /></label>
                 <label onClick={() => handleAddFilter('shadow')}><TypeButton color="#414141" title="SHADOW" /></label>
                </div>
            </TypeBox>
        </Header>
        <Container>
        <Main>
        
        {pokemons.map(pokemon => {
           return <PokemonItem key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
        })}
        

        </Main>
        </Container>
        </>
    );
}

export default Home;