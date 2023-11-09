import { type FC } from 'react';
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Button,
} from '@mui/material';
import RedDot from '../assets/redDot.svg';
import BlueDot from '../assets/blueDot.svg';
import GreenDot from '../assets/greenDot.svg';
import Driver1 from '../assets/driver1.svg';
import Driver2 from '../assets/driver2.svg';
import Driver3 from '../assets/driver3.svg';
import { StyledButton, Title } from '../scenes/CarAvailability';
import { styled } from '@mui/system';

const header = [
  {
    label: 'No.',
  },
  {
    label: 'Car no.',
  },
  {
    label: 'Driver',
  },
  {
    label: 'Status',
  },
  {
    label: 'Earnig',
  },
  {
    label: '',
  },
];
const rows = [
  {
    no: '01',
    carNo: '6465',
    driver: 'Alex Noman',
    status: 'Completed',
    earning: '35.44',
    img: Driver1,
  },
  {
    no: '02',
    carNo: '5665',
    driver: 'Razib Rahman',
    status: 'Pending',
    earning: '0',
    img: Driver2,
  },
  {
    no: '03',
    carNo: '1755',
    driver: 'Luke Norton',
    status: 'In route',
    earning: '23.50',
    img: Driver3,
  },
];
// 'In route' | 'Completed' | 'Pending'
const status = (status: string) => {
  if (status === 'Completed') return <img src={GreenDot} alt={'dot'} />;
  if (status === 'Pending') return <img src={BlueDot} alt={'dot'} />;
  if (status === 'In route') return <img src={RedDot} alt={'dot'} />;
};
export const CarTable: FC<{ title: string; data: any }> = ({ title, data }) => {
  return (
    <StyledTableContainer // component={Paper}
    >
      <Title>{'Live car status'}</Title>
      <Table sx={{ minWidth: 650, fontFamily: 'Inter' }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {header.map((item) => (
              <TableCell key={item.label} align='left'>
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row' sx={{ fontFamily: 'Inter' }}>
                <No>{row.no}</No>
              </TableCell>
              <TableCell align='left' sx={{ fontFamily: 'Inter' }}>
                <CarNo>{row.carNo}</CarNo>
              </TableCell>
              <TableCell align='left' sx={{ fontFamily: 'Inter' }}>
                <Div>
                  <img src={row.img} alt={''} />
                  <Driver>{row.driver}</Driver>
                </Div>
              </TableCell>
              <TableCell align='left' sx={{ fontFamily: 'Inter' }}>
                {status(row.status)}
                <Status>{row.status}</Status>
              </TableCell>
              <TableCell align='left' sx={{ fontFamily: 'Inter' }}>
                {row.earning}
              </TableCell>
              <TableCell align='left' sx={{ fontFamily: 'Inter' }}>
                <StyledButton variant='contained'>Details</StyledButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

const Driver = styled('span')(() => ({
  color: '#1A1919',
  fontSize: '16px',
}));
const CarNo = styled('span')(() => ({
  color: '#1A1919',
  fontSize: '14px',
  width: '66px',
  height: '24px',
  borderRadius: '4px',
  background: '#9999992b',
  padding: '4px 12px',
}));
const No = styled('span')(() => ({
  color: '#1A1919',
  fontSize: '12px',
}));
const Status = styled('span')(() => ({
  color: '#656575',
  fontSize: '16px',
  fontWeight: '300',
  marginLeft: '16px',
}));
const StyledTableContainer = styled(TableContainer)(() => ({
  // color: '#656575',
  fontFamily: 'Inter',
  padding: '0 0 40px 0',
}));

const Div = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
}));
