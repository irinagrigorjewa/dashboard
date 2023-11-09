import { styled } from '@mui/system';
import React from 'react';
import { BarChart } from '../../components/BarChart';
import { CarTable } from '../../components/CarTable';
import { EarningSummaryChart } from '../../components/EarningSummaryChart';
import { Input } from '../../components/Input';
import { LineChart } from '../../components/LineChart';
import { PieChart } from '../../components/PieChart';
import { SelectInput } from '../../components/Select';
import { CarAvailability, Title } from '../CarAvailability';
import { Statistic } from '../Statistic';
import SearchIcon from '../../assets/search.svg';
import Notification from '../../assets/notification.svg';

const searchInputStyle = {
  // '.MuiFilledInput-root': {
  width: '366px',
  background: '#fff',
  // padding: '12px 24px 12px 32px',
  borderRadius: '12px',
  color: '#A3A3A3',
  // '.MuiFilledInput-root': {
  boxShadow: '0px 0px 16px #A3A3A3',
  // },
};
export const Dashboard = () => {
  return (
    <Div>
      <Statistic />
      <MainScreen>
        {/* <BarChart width={'550px'} height={'550px'} /> */}
        <Header>
          <img src={Notification} alt={''} />
          <Search
            style={searchInputStyle}
            placeholder='Search here'
            endSlot={<img src={SearchIcon} />}
          />
        </Header>
        <CarAvailability />
        <CarTable title={''} data={[]} />
        <EarningSummaryHeader>
          <Title>{'Earning Summary'}</Title>
          <SelectInput
            style={{ width: '213px', height: '48px', border: 'none', fontSize: '12px' }}
            handleChange={() => {
              console.log('');
            }}
            value={''}
            placepolder={'22 May- 22 Sep'}
            menuItems={[]}
          />
        </EarningSummaryHeader>
        <EarningSummaryChart />
      </MainScreen>
      {/* <PieChart/>
            <LineChart/> */}
    </Div>
  );
};

const Div = styled('div')(() => ({
  display: 'flex',
}));
const EarningSummaryHeader = styled('div')(() => ({
  display: 'flex',
  marginBottom: '24px',
  gap: '32px',
}));
const MainScreen = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 28px 40px 28px',
}));
const Search = styled(Input)(() => ({
  '.MuiFilledInput-root': {
    width: '366px',
    background: '#fff',
    padding: '12px 24px 12px 32px',
    borderRadius: '12px',
    color: '#A3A3A3',
    // '.MuiFilledInput-root': {
    boxShadow: '0px 0px 16px #A3A3A3',
    // },
  },
}));
const Header = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'end',
  gap: '40px',
}));
