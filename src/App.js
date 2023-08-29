import React from 'react';
import './App.css';

import Intro from './components/Intro/Intro';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import Profile from './components/Profile/Profile';
import ContactMe from './components/ContactMe/ContactMe';
import ConnectWithMe from './components/ConnectWithMe/ConnectWithMe';
import Certificates from './components/Certificates/Certificates';
import Experiences from './components/Experiences/Experiences';
import Educations from './components/Educations/Educations';

export default function App() {
  return (
    <div className="App">
      <Intro />
      <hr />
      <Profile />
      <hr />
      <SkillsContainer />
      <hr />
      <Experiences />
      <hr />
      <Educations />
      <hr />
      <Certificates />
      <hr />
      <ContactMe />
      <ConnectWithMe />
    </div>
  );
}

