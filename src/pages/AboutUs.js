import React from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import FitnessImage from "../assets/images/about-fitness.jpg";
import DietImage from "../assets/images/about-diet.jpg";
import HelpImage from "../assets/images/about-help.jpg";

const MotionCard = motion(Card); // wrap MUI Card with framer-motion

const AboutUs = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 }, bgcolor: "#fdfdfd" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        color="#FF2625"
        align="center"
        gutterBottom
      >
        About FITNESS CLUB
      </Typography>

      <Typography
        variant="body1"
        fontSize="18px"
        color="text.secondary"
        maxWidth="800px"
        mx="auto"
        mb={6}
        textAlign="center"
      >
        Welcome to FITNESS CLUB – your ultimate fitness destination. We're dedicated to transforming your fitness journey with personalized exercise routines, engaging video tutorials, scientifically-backed diet plans, and interactive challenges that help boost your confidence.
        Join our community of like-minded individuals and take your first step towards a healthier, stronger you.
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ px: 2 }}
        >
          {/* Guided Exercises */}
          <MotionCard
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{ maxWidth: 345, boxShadow: 6 }}
          >
            <CardMedia
              component="img"
              height="200"
              image={FitnessImage}
              alt="Fitness Training"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Guided Exercises
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore expert-designed workouts tailored for your age and goals. Follow along with step-by-step video instructions.
              </Typography>
            </CardContent>
          </MotionCard>

          {/* Personalized Diet Plans */}
          <MotionCard
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{ maxWidth: 345, boxShadow: 6 }}
          >
            <CardMedia
              component="img"
              height="200"
              image={DietImage}
              alt="Diet Plan"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Personalized Diet Plans
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Receive nutrition advice and diet plans curated to match your body type, preferences, and fitness goals.
              </Typography>
            </CardContent>
          </MotionCard>
        </Stack>
      </motion.div>

      {/* Why Choose Us */}
      <Box mt={8} textAlign="center">
        <Typography variant="h4" fontWeight="bold" mb={2} color="#333">
          Why Choose Us?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="900px"
          mx="auto"
          mb={4}
        >
          At FITNESS CLUB, we believe that everyone deserves a healthy life.
          That's why we offer fully customized fitness experiences suited for all levels – from beginners to pros.
          Our supportive community, scientifically proven methods, and user-friendly platform make it easy to stay on track.
        </Typography>
      </Box>

      {/* Help Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box mt={6}>
          <Card sx={{ maxWidth: 800, mx: "auto", boxShadow: 4 }}>
            <CardMedia
              component="img"
              height="200"
              image={HelpImage}
              alt="Contact Help"
            />
            <CardContent>
              {/* You can add contact info here if needed */}
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
