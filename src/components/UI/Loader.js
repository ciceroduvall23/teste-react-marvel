/*import React, { FC } from 'react';

import './styles.css'

import Logo from '../img/logo-marvel.png';

const Loader: FC = () => {
  return(
    <div className="loader-wrapper">
        <img className="logo-loader" src={Logo}  alt="Logo" />
        <div  className="gradient-loader"></div>
    
    </div>
    
  );
}

export default Loader;
*/

import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./generic";
import "./styles.css";

import Logo from '../img/img-marvel2.png';

const Example = () => (
  <Section>
  <div className="loader-wrapper">
  <img className="logo-loader" src={Logo}  alt="Logo" />
        <div  className="gradient-loader"></div>
    {list.map(l => (
      <Article className="loader-circle" key={l.prop}>
        <ReactLoading type={l.prop} color="red" />
        <Prop>{l.name}</Prop>
      </Article>
    ))}
    </div>
  </Section>
);

export default Example;