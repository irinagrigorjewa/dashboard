import { styled } from '@mui/system';
import React, { type FC } from 'react';
import { Card } from './Card';

export const StatisticsCard: FC<{ title: string; data: any }> = ({ title, data }) => {
  return <></>;
};

const Title = styled('span')(() => ({
  color: '#656575',
}));

const Budget = styled('div')(() => ({
  color: 'black',
  fontSize: '28px',
  fontWeight: 'bold',
}));
