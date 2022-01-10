import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';

import '../../dracula.css';

import CardBase from '../Card';
import Draggable from 'react-draggable';

const Card = styled(CardBase)`
  bottom: 32px;
  right: 32px;
  position: fixed;
  height: 160px;
  width: 400px;
  overflow: hidden;
  z-index: 9;
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
      setText(oldText =>
        oldText !== textToType ? oldText + character : oldText
      );
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
    <Draggable>
      <Card title={props.title}>
        <pre>
          <code>{text}</code>
          <BlinkingCursor>_</BlinkingCursor>
        </pre>
      </Card>
    </Draggable>
  );
};

export default CodeCard;
