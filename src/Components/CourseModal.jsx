import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const CourseModal = ({ open, onClose, selectedCourse, onSubmit }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    degree: "",
    dob: "",
  });

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    onSubmit(data); 
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Enroll in {selectedCourse}
        </Typography>

        <Box
          component="form"
          mt={2}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            variant="outlined"
            onChange={updateFormData}
            value={data.name} 
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            variant="outlined"
            onChange={updateFormData}
            value={data.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Degree"
            name="degree"
            variant="outlined"
            onChange={updateFormData}
            value={data.degree} 
          />
          <TextField
            fullWidth
            margin="normal"
            label="Date of Birth"
            name="dob"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={updateFormData}
            value={data.dob} 
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            type="submit" 
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CourseModal;
