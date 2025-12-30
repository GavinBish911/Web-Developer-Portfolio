import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  useTheme,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import AnimatedBackground from './shared/AnimatedBackground';
import ParallaxElement from './shared/ParallaxElement';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would send the form data to your backend or a service like Netlify Forms
      console.log('Form submitted:', formData);

      // For demonstration purposes, we'll just show a success message
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 10,
        bgcolor: theme.palette.grey[50],
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Add animated background */}
      <AnimatedBackground 
        variant="primary" 
        density="low" 
        withCodeSymbols={false}
        opacity={0.4}
      />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            Have a question or want to work together? Feel free to contact me!
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <ParallaxElement strength={0.05} direction="horizontal">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      bgcolor: 'background.paper',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                      Contact Information
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <EmailIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">
                          <a
                            href="mailto:your.email@example.com"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                          >
                            your.email@example.com
                          </a>
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">Your Location, Country</Typography>
                      </Box>
                    </Box>

                    <Typography variant="h6" gutterBottom sx={{ mt: 4, mb: 2 }}>
                      Connect With Me
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <IconButton
                        aria-label="LinkedIn"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#0077B5',
                          bgcolor: 'rgba(0, 119, 181, 0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(0, 119, 181, 0.2)',
                          },
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton
                        aria-label="GitHub"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#333',
                          bgcolor: 'rgba(51, 51, 51, 0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(51, 51, 51, 0.2)',
                          },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        aria-label="Twitter"
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#1DA1F2',
                          bgcolor: 'rgba(29, 161, 242, 0.1)',
                          '&:hover': {
                            bgcolor: 'rgba(29, 161, 242, 0.2)',
                          },
                        }}
                      >
                        <TwitterIcon />
                      </IconButton>
                    </Box>
                  </Paper>
                </motion.div>
              </ParallaxElement>
            </Grid>

            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Send Me a Message
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            py: 1.5,
                            mt: 1,
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
