import React from 'react';
import Container from '@/client/components/elements/container';
import Wrapper from '../../providers/hero-context.provider';
import Sidebar from './sidebar';
import Main from './Main';

function Hero() {

  return (
    <Container as='section' className='grid place-items-center'>
      <div
        className='custom-scrollbar relative grid h-[80vh] min-h-[70vh] w-[85vw] min-w-[80vw] max-w-[90vw] resize-x grid-cols-[auto_1fr] overflow-auto rounded-[2rem]'
        style={{
          border: '0.1rem solid #c0c0c0',
          transition: 'all 0.1s',
        }}
      >
        <Wrapper>
          <Sidebar />
          <Main />
        </Wrapper>
      </div>
    </Container>
  );

}

export default Hero;
