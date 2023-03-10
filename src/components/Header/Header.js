import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:'flex', alignItems:'center', color:'white', marginBottom: '20px'}}>
          <DiCssdeck size='3rem'/> <Span>Portfólio Sofia</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projetos'>
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tecnologias'>
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#sobre'>
          <NavLink>Sobre</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Sofia-Magalhaes'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/sofiamagalhaesmello'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com/sofi.magal'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
