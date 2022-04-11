import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import lottie from 'lottie-web';

import { breakpoints } from '../Theme';

const StyledDiv = styled('div')(({ theme }) => ({
  width: '40px',
  height: '40px',
}));

function LottieIcon(props: { name: string; delay?: number; dataAos?: string; dataAosDelay?: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const delay = props.delay ?? 0;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function myCallback(el: HTMLElement) {
      setTimeout(() => {
        lottie.play(props.name);
      }, delay);
    }

    async function animate() {
      if (divRef.current) {
        divRef.current.innerHTML = '';
        lottie.setQuality('low');
        lottie.loadAnimation({
          container: divRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          // animationData: require(`assets/lottie/${props.name}.json`),
          animationData: require(`../../public/assets/lottie/${props.name}.json`),
          name: props.name,
        });

        const sr = (await import('scrollreveal')).default;
        sr().reveal(divRef.current, {
          delay: 0,
          afterReveal: myCallback,
        });
      }
    }
    animate();
  }, []);

  return <StyledDiv data-aos="fade-up" data-aos-delay={isMobile ? props.dataAosDelay ?? 0 : 0} ref={divRef} />;
}

export default LottieIcon;
