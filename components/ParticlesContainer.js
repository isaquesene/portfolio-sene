import {Particles} from 'react-tsparticles';

import {loadFull} from 'tsparticles';

import React, {useCallback} from 'react';


const ParticlesContainer = () => {
  // inicio
  const particlesInit = useCallback(async (engine) =>{
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return <Particles 
  className='w-full h-full absolute translate-z-0'
  id='tsparticles' 
  init={particlesInit} 
  loaded={particlesLoaded}
    options={{
      fullScreen: {enable: false},
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover:{
            enable: true,
            mode: 'repuse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          }
        }
      },
      particles:{
        color: {
          value: '#2cffff',
        },
        links: {
          color: '#2cffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          with: 1
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: {
            default: 'bounce'
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density:{
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5,
        },

      },
    }}
  />
 

};

export default ParticlesContainer;
