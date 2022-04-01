import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import BootstrapButtons from './bootstrap/BootstrapButtons';
import BootstrapTypography from './bootstrap/BootstrapTypography';
import BootstrapTables from './bootstrap/BootstrapTables';
import BootstrapForms from './bootstrap/BootstrapForms';
import BootstrapNavs from './bootstrap/BootstrapNavs';
import './styles/bootstrap.min.css';
import './styles/_bootswatch.scss';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <BootstrapButtons />
        <BootstrapTypography />
        <BootstrapTables />
        <BootstrapForms />
        <BootstrapNavs />
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
