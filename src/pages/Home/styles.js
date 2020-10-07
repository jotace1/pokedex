import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
    margin-top: 50px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        margin-top: 50px;
        margin-bottom: 15px;
        font-size: 18px;
        color: #C7C7C7;
        display: flex;
        align-items: center;

        img {
            margin-right: 8px;
        }

    }

    #type {
        @media(max-width: 1010px) {
        display: none;
    }
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const SearchInput = styled.input`
    background-color: #3a3a3a;
    flex-grow: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #fff;
    border: 2px solid #C7C7C7;
    border-right: 0;
`;

export const SearchButton = styled.button`
    width: 100px;
    height: 50px;

    background: #C7C7C7;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#C7C7C7')};
    }
`;

export const TypeBox = styled.div`
    max-width: 1000px;

    width: 100%;
    height: 150px;
    border-top: 1px solid #C7C7C7;
    border-bottom: 1px solid #C7C7C7;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1010px) {
        display: none;
    }
    

`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(auto-fit,minmax(225px, 350px) ); 
    grid-row-gap: 20px;


    @media(max-width: 400px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    a {
        margin-top: 20px;
    }
    }
`;