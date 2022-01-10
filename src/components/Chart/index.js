import React from 'react';
import styled, { keyframes } from 'styled-components';
import { XAxis, ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { FaGithub, FaInstagram } from 'react-icons/fa';

import CardBase from '../Card';

const Card = styled(CardBase)`
  min-width: 90%;
`;

const ColorIcons = keyframes`
0% { color: #ff79c6; }
50% { color: #50fa7b; }
100% { color: #ff79c6; }
`;

const TextContainer = styled.code`
  color: #8be9fd;
  font-size: 16px;
  padding: 0.5rem;
  white-space: pre-line;
`;

const LinksConttainer = styled.div`
  font-size: 48px;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 1rem;
  padding-bottom: 0;
  justify-content: space-evenly;
`;

const Link = styled.a`
  animation: ${ColorIcons} ${props => props.timeAnimation}s infinite;
`;

const SimpleLineChart = ({ bio }) => {
  const data = [
    { name: 'Node', score: 13 },
    { name: 'Web', score: 14 },
    { name: 'Dart', score: 7 },
    { name: 'TypeScript', score: 10 },
    { name: 'Linux', score: 15 },
    { name: 'Lua', score: 4 },
    { name: 'Python', score: 13 },
    { name: 'Sql', score: 5 },
    { name: 'MongoDB', score: 10 },
  ];

  return (
    <Card title='Knowledge Distribution'>
      <TextContainer>{bio}</TextContainer>
      <LinksConttainer>
        <Link
          target='_blank'
          href='https://www.instagram.com/__the.w__/'
          timeAnimation={10 * Math.random()}
        >
          <FaInstagram />
        </Link>
        <Link
          target='_blank'
          href='https://github.com/wthew'
          timeAnimation={10 * Math.random()}
        >
          <FaGithub />
        </Link>
      </LinksConttainer>
      <ResponsiveContainer height={200}>
        <AreaChart data={data}>
          <YAxis tick={<div />} />
          <XAxis dataKey='name' />
          <Area
            type='natural'
            dataKey='score'
            stroke='#8be9fd'
            fill='#282a36'
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SimpleLineChart;
