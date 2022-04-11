import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LottieCard(props: { name: string; delay?: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const delay = props.delay ?? 0;

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
  }, [divRef]);

  return <div data-aos="fade-up" ref={divRef} />;
}

export default LottieCard;
