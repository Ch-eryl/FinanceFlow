import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: crypto.randomUUID() }]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Dashboard transactions={transactions} />
          <TransactionForm onAddTransaction={addTransaction} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
