import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OfficeListPage() {
  const [offices, setOffices] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  // Fetch all offices when the page loads
  useEffect(() => {
    loadOffices();
  }, []);

  async function loadOffices() {
    const response = await axios.get('/api/office/all');
    setOffices(response.data);
  }

  async function handleSearch() {
    if (searchKeyword.trim() === '') {
      loadOffices(); // if search is empty, load all
      return;
    }
    const response = await axios.get('/api/office/search?keyword=' + searchKeyword);
    setOffices(response.data);
  }

  async function handleDelete(id) {
    const response = await axios.delete('/api/office/delete/' + id);
    toast.success(response.data);
    loadOffices(); // refresh the list after deleting
  }

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1>All Offices</h1>

      {/* Search Section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by name or number"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button onClick={handleSearch} style={{ marginLeft: '10px' }}>Search</button>
        <button onClick={() => { setSearchKeyword(''); loadOffices(); }} style={{ marginLeft: '5px' }}>Reset</button>
      </div>

      {/* Office Table */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Office Name</th>
            <th>Office Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offices.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No offices found</td>
            </tr>
          ) : (
            offices.map((office, index) => (
              <tr key={office.id}>
                <td>{index + 1}</td>
                <td>{office.name}</td>
                <td>{office.officeNumber}</td>
                <td>
                  <button onClick={() => handleDelete(office.id)} style={{ color: 'red' }}>Delete</button>
                  <button style={{ marginLeft: '5px' }} disabled>Update</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OfficeListPage;
