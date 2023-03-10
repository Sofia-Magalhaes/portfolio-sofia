import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem Vindo!<br/>
        Esse É O Meu Portfólio
      </SectionTitle>
      <SectionText>
        Olá, Meu nome é Sofia, seja bem vindo! Veja alguns projetos meus! 
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Aprenda mais</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;