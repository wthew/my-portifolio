import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import NET from 'vanta/dist/vanta.net.min.js';

const Container = styled.div`
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
`;

export default function Background() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: '#50fa7b',
          backgroundColor: '#282a36',
          points: 19.0,
          maxDistance: 14.0,
          spacing: 11.0,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <Container ref={myRef} />;
}
