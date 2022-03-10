import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #001529
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div`
    margin-left: 0.5ram;
    display: flex;
    align-items: center;
    font-size: 1.2ram;
    font-family: sans-serif;

    p{
        &:nth-child(2){
            font-size: 1.5rem;
            font-weight: 500;
            color:#fff;
        }
        &:nth-child(3){
            font-size: 1.5rem;
            font-weight: 500;
            color: #a1d0ff;
        }
    }

    svg{
        fill: #a1d0ff;
        margin-right: 0.5rem;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const MenuItem = styled.li`
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;

`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5ram 2.5ram;
    color: #edf6ff;
    font-family: sans-serif;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: #fff;
        background-color: #003c78;
        transition: 0.5s all ease;
    }
`;