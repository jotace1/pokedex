import styled from 'styled-components';
import { Link } from 'react-router-dom';

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