import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NET from 'vanta/dist/vanta.net.min.js';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
`;

export default function Background () {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: '#50fa7b',
        backgroundColor: '#282a36',
        points: 19.00,
        maxDistance: 14.00,
        spacing: 11.00,
        showDots: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <Container ref={myRef}>
    Foreground content goes here
  </Container>
}
