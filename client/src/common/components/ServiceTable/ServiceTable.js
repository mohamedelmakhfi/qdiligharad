import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  TablePagination,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import useServiceAgentStore from '../../store/useServiceAgentStore';
import useUserStore from '../../store/useUserStore';

const ServiceTable = () => {
  const {
    services,
    fetchServices,
    deleteService,
    fetchServiceDetails,
    serviceDetails,
    updateService,
    success,
    error,
    clearNotifications,
  } = useServiceAgentStore((state) => ({
    services: state.services,
    fetchServices: state.fetchServices,
    deleteService: state.deleteService,
    fetchServiceDetails: state.fetchServiceDetails,
    serviceDetails: state.serviceDetails,
    updateService: state.updateService,
    success: state.success,
    error: state.error,
    clearNotifications: state.clearNotifications,
  }));

  const { user } = useUserStore();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchServices(user?.id);
  }, [fetchServices, user?.id]);

  const handleDelete = (id) => {
    deleteService(id, user?.id);
  };

  const handleViewDetails = (id) => {
    fetchServiceDetails(id);
  };

  const handleUpdate = (service) => {
    setSelectedService(service);
    setOpenUpdateModal(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleUpdateSubmit = () => {
    updateService(selectedService.id, {
      ...selectedService,
      agentId: user?.id,
    });
    setOpenUpdateModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedService({
      ...selectedService,
      [name]: value,
    });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.id}</TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell>
                  {service.metadata.map((meta) => (
                    <div key={meta.id}>
                      {meta.metadata.name}: {meta.value}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="success" onClick={() => handleViewDetails(service.id)}>View Details</Button>
                  <Button variant="outlined" color="primary" onClick={() => handleUpdate(service)}>Update Service</Button>
                  <Button variant="outlined" color="error" onClick={() => handleDelete(service.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={services.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/* Modal for displaying service details */}
      {serviceDetails && (
        <div style={overlayStyles}>
          <div style={modalStyles}>
            <h2 style={labelStyles}>Service Details</h2>
            <p style={labelStyles}>
              <strong>ID:</strong> {serviceDetails.id}
            </p>
            <p style={contentStyles}>
              <strong>Name:</strong> <br />{serviceDetails.name}
            </p>
            <p style={contentStyles}>
              <strong>Category ID:</strong> {serviceDetails.categoryId}
            </p>
            <p style={contentStyles}>
              <strong>Agent ID:</strong> {serviceDetails.agentId}
            </p>
            <p style={contentStyles}>
              <strong>Metadata:</strong>
            </p>
            {serviceDetails.metadata.map((meta) => (
              <div key={meta.id} style={contentStyles}>
                <strong style={labelStyles}>{meta.metadata.name}:</strong> {meta.value}
              </div>
            ))}

            <Button style={ButtonStyles} variant="outlined" color="error" onClick={() => useServiceAgentStore.setState({ serviceDetails: null })}>Close</Button>
          </div>
        </div>
      )}

      {/* Modal for updating service details */}
      {openUpdateModal && selectedService && (
        <div style={overlayStyles}>
          <div style={modalStyles}>
            <h2 style={labelStyles}>Update Service</h2>
            <TextField
              label="Service Name"
              name="name"
              value={selectedService.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            {selectedService.metadata.map((meta, index) => (
              <TextField
                key={meta.id}
                label={meta.metadata.name}
                name={`metadata_${index}`}
                value={meta.value}
                onChange={(e) => {
                  const newMetadata = [...selectedService.metadata];
                  newMetadata[index].value = e.target.value;
                  setSelectedService({ ...selectedService, metadata: newMetadata });
                }}
                fullWidth
                margin="normal"
              />
            ))}
            <Button style={ButtonStyles} variant="outlined" color="primary" onClick={handleUpdateSubmit}>Update</Button>
            <Button style={ButtonStyles} variant="outlined" color="error" onClick={() => setOpenUpdateModal(false)}>Cancel</Button>
          </div>
        </div>
      )}

      {/* Centered Snackbar for notifications */}
      <Snackbar
        open={!!success || !!error}
        autoHideDuration={2000}
        onClose={() => clearNotifications()}
        style={snackbarStyles}
      >
        <Alert onClose={() => clearNotifications()} severity={error ? 'error' : 'success'}>
          {error || success}
        </Alert>
      </Snackbar>
    </div>
  );
};

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(3px)',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyles = {
  width: '80%',
  maxWidth: '600px',
  height: 'auto',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const labelStyles = {
  fontWeight: 'bold',
  marginBottom: '10px',
  color: 'var(--colour-main-blue-250)',
};

const contentStyles = {
  padding: '5px 0',
};

const ButtonStyles = {
  margin: '10px 0',
  width: '50%',
};

const snackbarStyles = {
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1100,
};

export default ServiceTable;
