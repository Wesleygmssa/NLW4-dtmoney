import React from 'react';
import GlobalStyled, { Container } from './styles/global';
import ExperienceBar from './components/ExperienceBar';

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyled />
      <ExperienceBar />
    </Container>
  );
}

export default App;
