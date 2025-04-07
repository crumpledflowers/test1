import React, { useState } from 'react';
import Login from './components/Login';
import ReportCard from './components/ReportCard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Student Report Card</h1>
      {token ? (
        <ReportCard token={token} />
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;
