import { Container, HeaderContainer, HeaderNav } from "./Layout.styled";
import React, { Suspense } from "react";

import { Outlet } from "react-router-dom";

export const Layout = ()=> {
    return (
        <Container>
            <HeaderContainer>
                <HeaderNav to="/" end>Home</HeaderNav>
                <HeaderNav to="/movies">Movies</HeaderNav>
            </HeaderContainer>

        <Outlet />

        </Container>
    )
}