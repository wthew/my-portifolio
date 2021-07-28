import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";

import "../../dracula.css";

import CardBase from "../Card";

const Card = styled(CardBase)`
  height: 200px;
  width: 400px;
  overflow: hidden;
`;

hljs.registerLanguage("json", json);

const blink = keyframes` to {visibility: hidden} `;

const BlinkingCursor = styled.span`
  color: #8be9fd;
  animation: ${blink} 1s steps(2, start) infinite;
`;

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const CodeCard = (props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    typing(props.children);
  }, [props.children]);

  async function typing(text) {
    // while (true) {
      await type(text);
      // await sleep(5000);
      // await del(text);
      // await sleep(5000);
    // }
  }

  useEffect(() => hljs.highlightAll(), [text]);

  async function type(param) {
    for (let character of param) {
      setText((oldText) => oldText + character);
      await sleep(typeInterval());
    }
  }

  function typeInterval() {
    const randomMs = 100 * Math.random();
    return randomMs < 50 ? 10 : randomMs;
  }

  async function del(param) {
    for (let character of param) {
      setText((oldText) => oldText.slice(0, -1));
      await sleep(1);
    }
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
