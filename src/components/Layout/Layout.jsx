import { Container, HeaderContainer, HeaderNav } from './Layout.styled';
import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderNav to="/" end>
          Home
        </HeaderNav>
        <HeaderNav to="/movies">Movies</HeaderNav>
      </HeaderContainer>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
