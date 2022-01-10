import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';

import '../../dracula.css';

import CardBase from '../Card';

const Card = styled(CardBase)`
  height: 200px;
  width: 400px;
  overflow: hidden;
`;

hljs.registerLanguage('json', json);

const blink = keyframes` to {visibility: hidden} `;

const BlinkingCursor = styled.span`
  color: #8be9fd;
  animation: ${blink} 1s steps(2, start) infinite;
`;

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const CodeCard = props => {
  const [text, setText] = useState('');

  const typing = useCallback(async textToType => {
    for (let character of textToType) {
      setText(oldText => oldText + character);
      await sleep(typeInterval());
    }
  }, []);

  useEffect(() => {
    typing(props.children);
  }, [props.children, typing]);

  useEffect(() => hljs.highlightAll(), [text]);


  function typeInterval() {
    const randomMs = 100 * Math.random();
    return randomMs < 50 ? 10 : randomMs;
  }

  return (
    <Card title={props.title}>
      <pre>
        <code>{text}</code>
        <BlinkingCursor>_</BlinkingCursor>
      </pre>
    </Card>
  );
};

export default CodeCard;
