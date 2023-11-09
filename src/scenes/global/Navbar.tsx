import React, { useState } from 'react';
import { Button, List, ListItem } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import DashboardImg from '../../assets/dashboard.svg';
import CarImg from '../../assets/car.svg';
import BellImg from '../../assets/bell.svg';
import GroupImg from '../../assets/group.svg';
import SettingsImg from '../../assets/settings.svg';
import LogoImg from '../../assets/logo.svg';
import LogoutImg from '../../assets/logout.svg';
import { useAppDispatch } from '../../redux/store';
import { logout } from '../../redux/reducers/appReducer';

const menuItems = [
  {
    label: 'Dashboard',
    route: '',
    icon: DashboardImg,
  },
  {
    label: 'Driver',
    route: 'driver',
    icon: CarImg,
  },
  {
    label: 'Bookings',
    route: 'bookings',
    icon: GroupImg,
  },
  {
    label: 'Notiications',
    route: 'notiications',
    icon: BellImg,
  },
  {
    label: 'Settings',
    route: 'settings',
    icon: SettingsImg,
  },
  {
    label: '',
    route: '',
    icon: null,
  },
  {
    label: 'Report',
    route: '',
    icon: null,
  },
  {
    label: 'Payment Details',
    route: 'paymentDetails',
    icon: DashboardImg,
  },
  {
    label: 'Transactions',
    route: 'transactions',
    icon: CarImg,
  },
  {
    label: 'Car Report',
    route: 'carReport',
    icon: GroupImg,
  },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.split('/')[1];
  const dispatch = useAppDispatch();
  // const [activeMenuItem, setActiveMenuItem] = useState('');
  return (
    <StyledNavbar>
      <Menu>
        <Logo>
          <img src={LogoImg} alt={'Logo'} />
          <Title>CAR RENT</Title>
        </Logo>
        <StyledList>
          {menuItems.map((item, index) => {
            if (item.icon === null) {
              if (item.label === '') {
                return <Line key={index} />;
              } else {
                return <div key={item.label}>{item.label}</div>;
              }
            }
            // console.log(item.route + '  ' + currentPage);
            return (
              <StyledListItem
                key={item.label}
                isActive={item.route === currentPage}
                onClick={() => {
                  navigate(item.route);
                  // setActiveMenuItem(item.route);
                }}
              >
                {item.route === currentPage && <Rectangle></Rectangle>}
                <StyledImg src={item.icon} alt={''} />
                {item.label}
              </StyledListItem>
            );
          })}
        </StyledList>
      </Menu>
      <StyledButton
        onClick={() => {
          navigate('/login');
          dispatch(logout());
        }}
      >
        <LogoutIcon src={LogoutImg} alt={''} />
        Logout
      </StyledButton>
    </StyledNavbar>
  );
};

const StyledNavbar = styled('div')(() => ({
  background: '#1a1919',
  color: 'white',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
}));

const StyledListItem = styled(ListItem)<{ isActive?: boolean }>(({ isActive }) => ({
  cursor: 'pointer',
  height: '48px',
  background: isActive ? '#006AFF' : '',
  paddingLeft: isActive ? '10px' : '16px',
  borderRadius: '4px',
}));

const StyledList = styled(List)(() => ({
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center'
}));

const Logo = styled('div')(() => ({
  display: 'flex',
  marginBottom: '20px',
  padding: '24px 0',
}));

const Title = styled('div')(() => ({
  fontSize: '26px',
  fontWeight: 'bold',
}));

const Menu = styled('div')(() => ({
  width: '192px',
}));

const LogoutIcon = styled('img')(() => ({
  marginRight: '12px',
}));

const StyledImg = styled('img')(() => ({
  marginRight: '8px',
}));

const StyledButton = styled(Button)(() => ({
  width: '192px',
  // height: '1px',
  background: '#FFFFFF82',
  // opacity: '20%',
  color: 'white',
  margin: '32px 0',
}));
const Line = styled('div')(() => ({
  width: '176px',
  height: '1px',
  background: '#D9D9D9',
  marginBottom: '12px',
}));

const Rectangle = styled('div')(() => ({
  width: '6px',
  height: '36px',
  background: '#fff',
  borderRadius: '4px',
  position: 'relative',
  left: '-10px',
}));
