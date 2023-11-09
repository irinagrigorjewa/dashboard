import { styled } from '@mui/system';
import { type FC } from 'react';

export const Card: FC<{ title: string; data: any }> = ({ title, data }) => {
  return (
    <StyledCard>
      <Header>
        <Title>{title}</Title>
        <Today>{'Today'}</Today>
      </Header>
      {data}
    </StyledCard>
  );
};

export const StyledCard = styled('div')(() => ({
  width: '288px',
  minHeight: '190px',
  background: 'white',
  // color: "white",
  padding: '24px',
}));

const Title = styled('span')(() => ({
  color: '#656575',
  fontSize: '18px',
  fontWeight: '500',
}));

const Today = styled('div')(() => ({
  color: '#656575',
  width: '36px',
  height: '16px',
  background: '#F4F5F7',
  borderRadius: '2px',
  fontSize: '12px',
  padding: '8px',
}));

const Header = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '12px',
}));
