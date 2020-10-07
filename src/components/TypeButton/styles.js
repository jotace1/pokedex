import styled, {css} from 'styled-components';
import { shade } from 'polished';


export const Button = styled.button`
    margin:20px 5px 0 5px;
    height: 35px;
    width: 80px;
    border: none;
    border-radius: 28%;
    text-decoration: none;
    font-weight:500;
    color: #fff;
    background-color: ${props => props.color};
    transition: background-color 0.2s; 

    &:hover{
        ${props =>css`
        background: ${shade(0.2, props.color)};
    `}
    }

    

`;