import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { SelectInput } from '../components/Select';
import CarIcon from '../assets/greyCar.svg';
import { DataPicker } from '../components/DataPicker';
import { colors } from '../styles/colors';

export const CarAvailability = () => {
  const [value, setValue] = useState('');
  return (
    <Div>
      <Title>Car Availability</Title>
      <Wrapper>
        <SelectInput
          style={{ width: '213px', height: '48px' }}
          value={value}
          handleChange={(e) => setValue(e.target.value)}
          label={'Car number'}
          menuItems={['12']}
          icon={<img src={CarIcon} alt={'car'} />}
        />
        <StyledDataPicker />
        <StyledButton variant='contained'>Check</StyledButton>
      </Wrapper>
    </Div>
  );
};
const Wrapper = styled('div')(() => ({
  display: 'flex',
  gap: '32px',
  paddingTop: '16px',
}));

const Div = styled('div')(() => ({
  padding: '32px 0 40px 0',
  maxWidth: '800px',
}));

export const StyledButton = styled(Button)(() => ({
  background: colors.blue,
  borderRadius: '4px',
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: '400',
  width: '121px',
  height: '48px',
}));

export const Title = styled('div')(() => ({
  fontWeight: 'bold',
  fontSize: '16px',
  color: '1A1919',
  // maxWidth: '800px',
}));
export const StyledDataPicker = styled(DataPicker)(() => ({
  '.MuiOutlinedInput-root': {
    height: '48px',
  },
}));
