import styled from 'styled-components';
import { Link } from 'react-router-dom';

const handleColorType = type => {
    switch (type) {
      case "normal":
        return "#B1B1B1";
      case "fighting":
        return "#B64D19";
      case "flying":
        return "#277BA1";
      case "poison":
        return "#823EC3";
      case "ground":
        return "#8A8331";
      case "rock":
        return "#715C3D";
      case "bug":
        return "#2F9651";
      case "ghost":
        return "#83417A";
      case "steel":
        return "#6C6C6C";
      case "fire":
        return "#A8282B";
      case "water":
        return "#145EAB";
      case "grass":
        return "#7D8545";
      case "electric":
        return "#BA9A22";
      case "psychic":
        return "#452A8D";
      case "ice":
        return "#659DBA";
      case "dragon":
        return "#D57931";
      case "dark":
        return "#232424";
      case "fairy":
        return "#BA65A0";
      case "unknown":
        return "#9A9A9A";
      case "shadow":
        return "#414141";
      default:
        return "#fff";

    }
  };

export const Button = styled(Link)`
    text-decoration: none;
    color: black;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const Box = styled.div`
    height: 250px;
    width: 250px;
    border: 1px solid #C7C7C7;
    border-radius: 15px;
    background: #fff;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    
    p {
        margin-top: 20px;
        font-weight: bold;
        color: #6C6C6C;
    }

  

    
`;


export const BoxImg = styled.div`
    background: #400406;
    border-radius: 15px;
    width: 200px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TypesBox = styled.div`
    display: flex;

`;

export const TypeName = styled.span`
    margin: 2px 10px 0 10px;
    border-radius: 4px;
    color: #fff;
    background: ${({type}) => handleColorType(type)};
    padding: 0 10px 0 10px; 
`;