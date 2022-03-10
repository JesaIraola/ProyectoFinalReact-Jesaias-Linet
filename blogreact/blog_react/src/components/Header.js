import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink} from './Header.elements';
import { SiApacheairflow } from "react-icons/si";
import { IconContext } from 'react-icons/lib';

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value ={{ style: {fontSize: "2em"}}}>
                    <LogoContainer>
                        <SiApacheairflow />
                        <p>Blog</p>
                        <p>Viajes</p>
                    </LogoContainer>
                        <Menu>
                            <MenuItem>
                                <MenuItemLink><a href="/">Posts</a></MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink><a href="/registrarse">Registrarse</a></MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink><a href="/Nosotros">Nosotros</a></MenuItemLink>
                            </MenuItem>
                        </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    );
};

export default Header;
