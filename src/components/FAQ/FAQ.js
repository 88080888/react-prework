import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { FAQData } from '../../data/dataStore';

const FAQ = () => (

  <Container>
    <Hero titleText={FAQData.title} imgSrc ={FAQData.image}/>
    <p>{FAQData.pageContent}</p>
  </Container>  
);

export default FAQ;