import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import ContactImage from "../assets/images/contact-graphic.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
      alert("Please log in to send a message.");
      return;
    }

    // Simulate message send success (add your fetch or axios POST call here)
    alert("Message sent successfully!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6, bgcolor: "#f9fafc" }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" fontWeight="bold" color="#FF2625" textAlign="center" mb={2}>
          Get in Touch with FITNESS CLUB
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          maxWidth="700px"
          mx="auto"
          color="text.secondary"
        >
          Have questions, suggestions, or need help? We'd love to hear from you. Our team is here to make sure your fitness journey is smooth, motivating, and successful.
        </Typography>
      </motion.div>

      {/* Content Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        mt={6}
        alignItems="center"
        justifyContent="center"
      >
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              bgcolor: "white",
              boxShadow: 4,
              p: 4,
              borderRadius: "12px",
              width: { xs: "100%", md: "500px" },
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  required
                />
                <TextField
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  sx={{ mt: 2, textTransform: "none" }}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Box>
        </motion.div>

        {/* Animated Contact Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card
            sx={{
              width: { xs: "100%", md: "400px" },
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: 4,
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image={ContactImage}
              alt="Contact Graphic"
              sx={{ objectFit: "cover" }}
            />
          </Card>
        </motion.div>
      </Stack>

      {/* Extra Info */}
      <Box mt={8} textAlign="center">
        {/* <Typography variant="h6" color="text.secondary" mb={1}>
          📞 Phone: <a href="tel:+919023482484" style={{ color: "#FF2625" }}>+91 90234 82484</a>
        </Typography> */}
        <Typography variant="h6" color="text.secondary">
          📧 Email: <a href="mailto:princestudent1310@gmail.com" style={{ color: "#FF2625" }}>princestudent1310@gmail.com</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
 