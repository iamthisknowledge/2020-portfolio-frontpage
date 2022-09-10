import React from 'react';
import { Main, Image, Box, Heading, Grommet, Paragraph } from 'grommet';
import './App.css';
import Projects from './components/projects/projects.component';
import SkillsMeter from './components/skills/skills.component';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <header className='App-header'>
        <Main pad='large'>
          <Heading margin='none'>Hi, I am Rodrigo.</Heading>
          <Paragraph align='middle'>
            Feel free to check this Portfolio which was implemented with knowledge from around 2020. It uses grommet for styling.
          </Paragraph>
          <Paragraph>
            <Projects></Projects>
          </Paragraph>
          <Paragraph></Paragraph>
        </Main>
      </header>
    </Grommet>
  );
}

export default App;
