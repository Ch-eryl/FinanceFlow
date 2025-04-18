import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <AccountBalanceIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div">
          FinanceFlow
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
