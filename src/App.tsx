import React from 'react';
import { BarChart } from './components/BarChart';
import { Route, Routes } from 'react-router-dom';
import { Input } from './components/Input';
import { PieChart } from './components/PieChart';
import { LineChart } from './components/LineChart';
import { Dashboard } from './scenes/dashboard/Dashboard';
import { Navbar } from './scenes/global/Navbar';
import { styled } from '@mui/system';
import { LoginPage } from './scenes/login/LoginPage';
import { useAppSelector } from './redux/store';

function App() {
  const loggedIn = useAppSelector((store) => store.appReducer.loggedIn);

  return (
    <div className='app'>
      <StyledRoutes loggedIn={loggedIn}>
        {loggedIn && <Navbar />}
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path="/driver" element={<Dashboard />} />
              <Route path="/bookig" element={<Dashboard />} />
              <Route path="/notifications" element={<Dashboard />} />
          <Route path={'/login'} element={<LoginPage />} />
        </Routes>
      </StyledRoutes>
    </div>
  );
}

const Layout = () => {
  return (
    <div>
      {/* <div className="container"> */}
      <Navbar />
      {/* </div> */}
    </div>
  );
};
const PrivateRoutes = (route: any) => {
  return (
    <Route
      path='/'
      element={
        <>
          <Navbar />
          {route}
        </>
      }
    />
  );
};

export default App;

const StyledRoutes = styled('div')<{ loggedIn: boolean }>(({ loggedIn }) => ({
  //   padding: "20px",
  width: loggedIn ? undefined : '100%',
  position: loggedIn ? 'absolute' : undefined,
  left: loggedIn ? '240px' : undefined,
}));
