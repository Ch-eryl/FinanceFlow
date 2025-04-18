import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const pieData = {
    labels: ['Income', 'Expenses'],
    datasets: [{
      data: [totalIncome, totalExpenses],
      backgroundColor: ['#4caf50', '#f44336'],
    }]
  };

  const categoryData = {
    labels: ['Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment'],
    datasets: [{
      label: 'Expenses by Category',
      data: [300, 200, 1000, 150, 250],
      backgroundColor: '#2196f3',
    }]
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Balance</Typography>
          <Typography variant="h4" color={balance >= 0 ? 'success.main' : 'error.main'}>
            ${balance.toFixed(2)}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Income</Typography>
          <Typography variant="h4" color="success.main">${totalIncome.toFixed(2)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6">Expenses</Typography>
          <Typography variant="h4" color="error.main">${totalExpenses.toFixed(2)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Pie data={pieData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Bar data={categoryData} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
