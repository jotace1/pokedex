import styled from 'styled-components';


export const Header = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.div`
    height: 100%;
    margin: 30px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

   
`;

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 650px){
        flex-direction: column;
    }

`;

export const Info = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction:column;
    align-items: center;
    color: #6C6C6C;
`;

export const Details = styled.div`
    background: #400406;
    border-radius: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 200px 200px;
    justify-items: center;
    align-items: center;
    color: #fff;

    div {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3 {
            display: flex;
            align-items: center;

            svg {
                margin-right: 4px;
            }
        }

        span{
            margin-top: 16px;
            margin-bottom: 16px;
        }
    }

    @media(max-width: 650px){
        max-width: 300px;
        padding: 50px;
        display: flex;
        flex: 1;
        flex-direction: column;

    }
`;