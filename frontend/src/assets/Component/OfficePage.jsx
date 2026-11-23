import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OfficePage() {
  const [officeName, setOfficeName] = useState('');
  const [officeNumber, setOfficeNumber] = useState('');

  async function createOffice() {
    const response = await axios.post('/api/office/save', {
      name: officeName,
      officeNumber: officeNumber
    });

    toast.success(response.data);
    setOfficeName('');
    setOfficeNumber('');
  }

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1>Create Office</h1>
      <label>Office Name: </label>
      <input 
        type="text" 
        value={officeName} 
        onChange={(e) => setOfficeName(e.target.value)} 
      />
      <br />
      <label>Office Number: </label>
      <input 
        type="number" 
        value={officeNumber} 
        onChange={(e) => setOfficeNumber(e.target.value)} 
      />
      <br />
      <button onClick={createOffice}>Create Office</button>
    </div>
  );
}

export default OfficePage;
