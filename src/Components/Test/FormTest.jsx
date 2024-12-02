import { Input, Button } from '@mui/material';
import React, { useState } from 'react';

const FormTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const updateValue = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const uploadFormData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Failed to save form data: ${response.status}`);
      }

      const data = await response.json();
      console.log('Form data saved successfully:', data);
    } catch (error) {
      console.error('Error saving form data:', error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, margin: 'auto' }}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={updateValue}
        value={formData.name}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        onChange={updateValue}
        value={formData.email}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={updateValue}
        value={formData.password}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={uploadFormData}
        style={{ marginTop: '10px' }}
      >
        Submit
      </Button>
    </div>
  );
};

export default FormTest;
