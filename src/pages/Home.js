import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Paper
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HeroBanner from '../components/HeroBanner';
import { Link } from 'react-router-dom';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const isAuthenticated = localStorage.getItem("user");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box className="home-main">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Welcome Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" className="section-title" gutterBottom>
          💪 Welcome to <span className="gradient-text">Fitness Club</span>
        </Typography>
        <Typography variant="h6" className="section-subtitle" maxWidth="md" mx="auto">
          Your ultimate fitness companion — helping you eat smart, train hard, and stay consistent with expert plans and live tracking.
        </Typography>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            { icon: <FitnessCenterIcon fontSize="large" className="feature-icon" />, title: "Workout Plans", desc: "Customized routines to smash your fitness goals." },
            { icon: <RestaurantIcon fontSize="large" className="feature-icon" />, title: "Diet Guidance", desc: "Structured healthy meal plans tailored for you." },
            { icon: <VerifiedUserIcon fontSize="large" className="feature-icon" />, title: "Secure Login", desc: "OTP verification for strong security." },
            { icon: <NotificationsActiveIcon fontSize="large" className="feature-icon" />, title: "Reminders & Tips", desc: "Daily fitness reminders and expert advice." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Paper elevation={6} className="feature-card">
                <Box className="feature-content">
                  {feature.icon}
                  <Typography variant="h6" className="feature-title">
                    {feature.title}
                  </Typography>
                  <Typography className="feature-desc">
                    {feature.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box className="how-it-works">
        <Container maxWidth="md">
          <Typography variant="h4" className="section-title" gutterBottom>
            🚀 How It Works
          </Typography>
          <Typography className="section-subtitle" mb={5}>
            Your fitness journey in three clear steps.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                step: '1. Register & Login',
                desc: 'Create your account and log in to access your fitness dashboard.',
                // img: '/assets/step-register.png',
              },
              {
                step: '2. Access Workouts',
                desc: 'Explore workout plans tailored to your fitness goals and progress.',
                // img: '/assets/step-workout.png',
              },
              {
                step: '3. Unlock Diet Plans',
                desc: 'Subscribe to access premium diet plans designed by experts.',
                // img: '/assets/step-subscribe.png',
              },
            ].map((item, idx) => (
              <Grid item xs={12} sm={4} key={idx} data-aos="zoom-in">
                <Paper elevation={5} className="how-card">
                  {/* <img
                    src={item.img}
                    alt={`Step ${idx + 1}`}
                    className="how-icon"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/80x80?text=Step+${idx + 1}`;
                    }}
                  /> */}
                  <Typography variant="h6" className="how-step">{item.step}</Typography>
                  <Typography className="how-desc">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      {!isAuthenticated && (
        <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h4" className="cta-title" mb={3}>
            Ready to Transform Yourself?
          </Typography>
          <Typography className="cta-subtitle" mb={4}>
            Join thousands already progressing with <span className="gradient-text">Fitness Club</span>.
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="cta-button"
            component={Link}
            to="/login"
          >
            Log In / Sign Up
          </Button>
        </Container>
      )}

      {/* Scroll to Top Button */}
      <Button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ⬆️
      </Button>
    </Box>
  );
};

export default Home;
