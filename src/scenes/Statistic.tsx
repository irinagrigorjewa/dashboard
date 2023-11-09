import { styled } from '@mui/system';
import ArrowUp from '../assets/arrowUp.svg';
import ArrowDown from '../assets/arrowDown.svg';
import { Card } from '../components/Card';
import { DoughnutChart } from '../components/DoughnutChart';

interface CardData {
  title: string;
  budget: string;
  yesterdayBudget: string;
  lastWeek: string;
  trend: 'dec' | 'inc';
  trendPercent: string;
}

const cardData: CardData[] = [
  {
    title: 'Income',
    budget: '$ 9460',
    yesterdayBudget: '$ 9460',
    lastWeek: '$22658.00',
    trend: 'dec',
    trendPercent: '1.5',
  },
  {
    title: 'Expences',
    budget: '$ 9460',
    yesterdayBudget: '$ 9460',
    lastWeek: '$22658.00',
    trend: 'inc',
    trendPercent: '2.5',
  },
];
export const Statistic = () => {
  return (
    <Div>
      <div>
        <Title>Todays statistics</Title>
        <Date>{'Tue, 14 Nov, 2022, 11:30 AM'}</Date>
      </div>
      {cardData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          data={
            <>
              <Line />
              <TrendWrapper>
                <Budget>{card.budget}</Budget>
                <Trend type={card.trend}>
                  <img src={card.trend === 'inc' ? ArrowUp : ArrowDown} alt={'Trend'} />
                  {card.trendPercent + '%'}
                </Trend>
              </TrendWrapper>
              <Text>{`Compared to ${card.yesterdayBudget} yesterday`}</Text>
              <LastWeekText>
                <span>{`Last week ${card.title.toLowerCase()}`}</span>
                <span>{card.lastWeek}</span>
              </LastWeekText>
            </>
          }
        />
      ))}

      <Card title={'Hire vs Cancel'} data={<DoughnutChart />} />
    </Div>
  );
};

const Div = styled('div')(() => ({
  width: '344px',
  height: '100%',
  background: '#F8F7F1',
  padding: '32px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

const Budget = styled('span')(() => ({
  color: 'black',
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '8px',
}));

const Text = styled('div')(() => ({
  color: '#656575',
  fontSize: '14px',
  fontWeight: '300',
  marginBottom: '2px',
}));

const Line = styled('div')(() => ({
  width: '240px',
  height: '1px',
  background: '#D9D9D9',
  marginBottom: '12px',
}));

const Title = styled('div')(() => ({
  color: '#525256',
  fontSize: '20px',
  fontWeight: '500',
  marginBottom: '8px',
}));
const Date = styled('div')(() => ({
  color: '#A3A3A3',
  fontSize: '14px',
  fontWeight: '400',
}));
const LastWeekText = styled('div')(() => ({
  color: '#525256',
  fontSize: '14px',
  fontWeight: '500',
  display: 'flex',
  justifyContent: 'space-between',
}));
const Trend = styled('span')<{ type: 'inc' | 'dec' }>(({ type }) => ({
  color: type === 'inc' ? 'green' : 'red',
  fontSize: '16px',
  fontWeight: '500',
}));
const TrendWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
