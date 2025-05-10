import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { FiPlus, FiUsers, FiRefreshCw, FiDollarSign, FiList } from 'react-icons/fi';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [groups, setGroups] = useState([]);
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '', groupId: '' });

  const fetchData = async () => {
    setLoading(true);
    try {
      const user = getAuth().currentUser;
      const token = await user.getIdToken();
      const headers = { Authorization: `Bearer ${token}` };

      const [expensesRes, groupsRes, balancesRes] = await Promise.all([
        axios.get('http://localhost:8080/api/expenses', { headers }),
        axios.get('http://localhost:8080/api/groups', { headers }),
        axios.get('http://localhost:8080/api/balances', { headers }),
      ]);

      setExpenses(expensesRes.data);
      setGroups(groupsRes.data);
      setBalances(balancesRes.data);
    } catch (err) {
      console.error('Error loading dashboard:', err);
    }
    setLoading(false);
  };

  const handleAddExpense = async () => {
    if (!newExpense.description || !newExpense.amount) return;
    
    try {
      const user = getAuth().currentUser;
      const token = await user.getIdToken();
      const headers = { Authorization: `Bearer ${token}` };

      await axios.post('http://localhost:8080/api/expenses', {
        ...newExpense,
        amount: parseFloat(newExpense.amount),
      }, { headers });
      
      setNewExpense({ description: '', amount: '', groupId: '' });
      fetchData();
    } catch (err) {
      alert('Failed to add expense');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p>Loading your dashboard...</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Background elements */}
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>
      
      <header className="dashboard-header">
        <div className="header-content">
          <h1>
            <FiDollarSign className="header-icon" />
            Expense Dashboard
          </h1>
          <button 
            className="refresh-btn"
            onClick={fetchData}
            aria-label="Refresh data"
          >
            <FiRefreshCw className="refresh-icon" />
            Refresh
          </button>
        </div>
      </header>

      <main className="dashboard-grid">
        {/* Balances Section */}
        <section className="dashboard-card">
          <div className="card-header">
            <FiUsers className="card-icon" />
            <h2>Your Balances</h2>
          </div>
          <div className="card-content">
            {balances.length === 0 ? (
              <p className="empty-state">All settled up!</p>
            ) : (
              <div className="balances-grid">
                {balances.map((balance, index) => (
                  <div 
                    key={index} 
                    className={`balance-card ${balance.amount > 0 ? 'positive' : 'negative'}`}
                  >
                    <div className="balance-info">
                      <h3>{balance.friendName}</h3>
                      <p className="balance-amount">
                        {balance.amount > 0 ? `Owes you ₹${balance.amount.toFixed(2)}` : `You owe ₹${Math.abs(balance.amount).toFixed(2)}`}
                      </p>
                    </div>
                    <div className="balance-icon">
                      {balance.amount > 0 ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M22 12h-6l-3-9L9 21l-3-9H2" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Add Expense Section */}
        <section className="dashboard-card">
          <div className="card-header">
            <FiPlus className="card-icon" />
            <h2>Add Expense</h2>
          </div>
          <div className="card-content">
            <div className="expense-form">
              <div className="form-group">
                <label>What was it for?</label>
                <input
                  type="text"
                  placeholder="Dinner, groceries, etc."
                  value={newExpense.description}
                  onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                  className="form-input"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>Group</label>
                  <select
                    value={newExpense.groupId}
                    onChange={(e) => setNewExpense({...newExpense, groupId: e.target.value})}
                    className="form-input"
                  >
                    <option value="">Personal</option>
                    {groups.map(group => (
                      <option key={group.id} value={group.id}>{group.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button 
                onClick={handleAddExpense}
                disabled={!newExpense.description || !newExpense.amount}
                className="submit-btn"
              >
                Add Expense
              </button>
            </div>
          </div>
        </section>

        {/* Recent Expenses Section */}
        <section className="dashboard-card">
          <div className="card-header">
            <FiList className="card-icon" />
            <h2>Recent Expenses</h2>
          </div>
          <div className="card-content">
            {expenses.length === 0 ? (
              <p className="empty-state">No expenses recorded yet</p>
            ) : (
              <div className="expenses-list">
                {expenses.slice(0, 5).map(expense => (
                  <div key={expense.id} className="expense-item">
                    <div className="expense-main">
                      <span className="expense-description">{expense.description}</span>
                      <span className="expense-amount">₹{expense.amount.toFixed(2)}</span>
                    </div>
                    <div className="expense-meta">
                      <span className="expense-paid-by">Paid by {expense.paidByName}</span>
                      {expense.groupId && <span className="expense-group-tag">Group</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        :root {
          --primary: #4f46e5;
          --primary-light: #6366f1;
          --primary-dark: #4338ca;
          --positive: #10b981;
          --negative: #ef4444;
          --text: #1f2937;
          --text-light: #6b7280;
          --bg: #f9fafb;
          --card-bg: #ffffff;
          --border: #e5e7eb;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .dashboard-container {
          min-height: 100vh;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text);
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
        }

        /* Background blobs */
        .bg-blob-1, .bg-blob-2 {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.2;
          z-index: -1;
        }

        .bg-blob-1 {
          width: 400px;
          height: 400px;
          background: var(--primary-light);
          top: -100px;
          right: -100px;
        }

        .bg-blob-2 {
          width: 300px;
          height: 300px;
          background: var(--negative);
          bottom: -50px;
          left: -50px;
        }

        /* Header */
        .dashboard-header {
          margin-bottom: 2.5rem;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dashboard-header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .header-icon {
          color: var(--primary);
          font-size: 1.5rem;
        }

        .refresh-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--primary-dark);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          box-shadow: var(--shadow);
          transition: all 0.2s ease;
        }

        .refresh-btn:hover {
          background: var(--primary-light);
          color: black;
        }

        .refresh-icon {
          font-size: 1rem;
        }

        /* Dashboard Grid */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        /* Cards */
        .dashboard-card {
          background: var(--card-bg);
          border-radius: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                      0 4px 6px -4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
        }

        .card-header {
          padding: 1.25rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .card-header h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .card-icon {
          color: var(--primary);
          font-size: 1.25rem;
        }

        .card-content {
          padding: 1.25rem;
        }

        /* Empty State */
        .empty-state {
          color: var(--text-light);
          text-align: center;
          padding: 2rem 0;
        }

        /* Balances */
        .balances-grid {
          display: grid;
          gap: 0.75rem;
        }

        .balance-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: 0.75rem;
          background: var(--card-bg);
          transition: all 0.2s ease;
        }

        .balance-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .balance-card.positive {
          border-left: 4px solid var(--positive);
        }

        .balance-card.negative {
          border-left: 4px solid var(--negative);
        }

        .balance-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .balance-amount {
          font-size: 0.875rem;
          color: var(--text-light);
        }

        .balance-icon svg {
          stroke-width: 2;
        }

        /* Expense Form */
        .expense-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-light);
        }

        .form-input {
          padding: 0.75rem 1rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          transition: all 0.2s ease;
          background-color: #f8fafc;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
          background-color: white;
        }

        .form-row {
          display: flex;
          gap: 1rem;
        }

        .form-row .form-group {
          flex: 1;
        }

        /* Submit Button */
        .submit-btn {
          padding: 0.75rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .submit-btn:disabled {
          background: #d1d5db;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* Expenses List */
        .expenses-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .expense-item {
          padding: 1rem;
          border-radius: 0.75rem;
          background: var(--card-bg);
          transition: all 0.2s ease;
        }

        .expense-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .expense-main {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .expense-description {
          font-weight: 500;
        }

        .expense-amount {
          font-weight: 600;
          color: var(--text);
        }

        .expense-meta {
          display: flex;
          gap: 0.75rem;
          font-size: 0.8125rem;
          color: var(--text-light);
        }

        .expense-group-tag {
          background: #e0e7ff;
          color: var(--primary);
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* Loading Screen */
        .loading-screen {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: var(--bg);
        }

        .loading-spinner {
          width: 3rem;
          height: 3rem;
          border: 0.375rem solid rgba(79, 70, 229, 0.1);
          border-top-color: var(--primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .dashboard-container {
            padding: 1.5rem;
          }

          .form-row {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .dashboard-container {
            padding: 1rem;
          }

          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;