import React, { useState } from 'react';
import { Paper, TextField, Button, Grid, MenuItem } from '@mui/material';

function TransactionForm({ onAddTransaction }) {
  const [transaction, setTransaction] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({
      ...transaction,
      amount: Number(transaction.amount)
    });
    setTransaction({
      description: '',
      amount: '',
      type: 'expense',
      category: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const categories = [
    'Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment',
    'Healthcare', 'Shopping', 'Income', 'Salary', 'Investment'
  ];

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Description"
              value={transaction.description}
              onChange={(e) => setTransaction({...transaction, description: e.target.value})}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Amount"
              value={transaction.amount}
              onChange={(e) => setTransaction({...transaction, amount: e.target.value})}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Type"
              value={transaction.type}
              onChange={(e) => setTransaction({...transaction, type: e.target.value})}
            >
              <MenuItem value="expense">Expense</MenuItem>
              <MenuItem value="income">Income</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Category"
              value={transaction.category}
              onChange={(e) => setTransaction({...transaction, category: e.target.value})}
              required
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="date"
              label="Date"
              value={transaction.date}
              onChange={(e) => setTransaction({...transaction, date: e.target.value})}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Transaction
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default TransactionForm;
