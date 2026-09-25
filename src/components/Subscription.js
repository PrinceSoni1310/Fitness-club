import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubscribePage.css';

const Subscription = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phoneNumber: '',
    email: '',
    paymentMethod: 'upi',
    upiId: '',
    upiApp: 'gpay',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    paymentPin: ''
  });
  const [errors, setErrors] = useState({});
  const [paymentStep, setPaymentStep] = useState(1); // 1: payment details, 2: pin verification

  const plans = [
    {
      id: 1,
      title: "3 Months Plan",
      originalPrice: 750,
      discountedPrice: 600,
      duration: "3 Months",
      tag: "Most Popular"
    },
    {
      id: 2,
      title: "6 Months Plan",
      originalPrice: 1500,
      discountedPrice: 1000,
      duration: "6 Months",
      tag: "Best Value"
    },
    {
      id: 3,
      title: "12 Months Plan",
      originalPrice: 3000,
      discountedPrice: 1500,
      duration: "12 Months",
      tag: "Maximum Savings"
    },
  ];

  const benefits = [
    "✅ Access to Premium Diet Plans",
    "✅ Direct Chat Support with Gym Trainers and Fitness Enthusiasts",
    "✅ Quick Response to Exercise-related Issues",
    "✅ 24/7 Customer Support",
    "✅ Personalized Fitness Tips and Recommendations"
  ];

  const upiApps = [
    { id: 'gpay', name: 'Google Pay', icon: '💰' },
    { id: 'phonepay', name: 'PhonePe', icon: '📱' },
    { id: 'paytm', name: 'Paytm', icon: '💲' },
    { id: 'amazonpay', name: 'Amazon Pay', icon: '🛒' },
    { id: 'other', name: 'Other UPI Apps', icon: '🔷' }
  ];

  const handleSubscribeClick = (plan) => {
    setSelectedPlan(plan);
    setPaymentStep(1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    
    if (paymentStep === 1) {
      if (formData.paymentMethod === 'upi' && !formData.upiId) newErrors.upiId = 'UPI ID is required';
      if (formData.paymentMethod === 'card') {
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
        if (!formData.cardExpiry) newErrors.cardExpiry = 'Expiry date is required';
        if (!formData.cardCvv) newErrors.cardCvv = 'CVV is required';
      }
    } else if (paymentStep === 2) {
      if (!formData.paymentPin) newErrors.paymentPin = 'PIN is required';
      else if (formData.paymentPin.length !== 4) newErrors.paymentPin = 'PIN must be 4 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (paymentStep === 1) {
        setPaymentStep(2);
      } else {
        localStorage.setItem('subscription', 'true');
        alert(`🎉 Congratulations! You've subscribed to the ${selectedPlan.title}`);
        navigate('/diet-plans');
      }
    }
  };

  const closePaymentForm = () => {
    setSelectedPlan(null);
    setFormData({
      fullName: '',
      age: '',
      phoneNumber: '',
      email: '',
      paymentMethod: 'upi',
      upiId: '',
      upiApp: 'gpay',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
      paymentPin: ''
    });
    setErrors({});
    setPaymentStep(1);
  };

  const renderPaymentStep = () => {
    if (paymentStep === 1) {
      return (
        <>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter your age"
              min="10"
              max="100"
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={handleInputChange}
                />
                UPI Payment
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                />
                Credit/Debit Card
              </label>
            </div>
          </div>

          {formData.paymentMethod === 'upi' && (
            <>
              <div className="form-group">
                <label>Select UPI App</label>
                <div className="upi-apps-grid">
                  {upiApps.map(app => (
                    <label key={app.id} className={`upi-app-option ${formData.upiApp === app.id ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="upiApp"
                        value={app.id}
                        checked={formData.upiApp === app.id}
                        onChange={handleInputChange}
                        hidden
                      />
                      <span className="upi-app-icon">{app.icon}</span>
                      <span className="upi-app-name">{app.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="upiId">UPI ID</label>
                <input
                  type="text"
                  id="upiId"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleInputChange}
                  placeholder="Enter your UPI ID (e.g., name@upi)"
                />
                {errors.upiId && <span className="error">{errors.upiId}</span>}
              </div>
            </>
          )}

          {formData.paymentMethod === 'card' && (
            <>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                />
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
              </div>
              <div className="card-details-group">
                <div className="form-group">
                  <label htmlFor="cardExpiry">Expiry Date</label>
                  <input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                  {errors.cardExpiry && <span className="error">{errors.cardExpiry}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="cardCvv">CVV</label>
                  <input
                    type="text"
                    id="cardCvv"
                    name="cardCvv"
                    value={formData.cardCvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="3"
                  />
                  {errors.cardCvv && <span className="error">{errors.cardCvv}</span>}
                </div>
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <div className="pin-verification">
          <div className="payment-summary">
            <h3>Payment Summary</h3>
            <p>Plan: <strong>{selectedPlan.title}</strong></p>
            <p>Amount: <strong>₹{selectedPlan.discountedPrice}</strong></p>
            <p>Payment Method: <strong>{formData.paymentMethod === 'upi' ? 'UPI' : 'Card'}</strong></p>
            {formData.paymentMethod === 'upi' && (
              <p>UPI App: <strong>{upiApps.find(app => app.id === formData.upiApp)?.name}</strong></p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="paymentPin">Enter 4-digit PIN</label>
            <input
              type="password"
              id="paymentPin"
              name="paymentPin"
              value={formData.paymentPin}
              onChange={handleInputChange}
              placeholder="••••"
              maxLength="4"
              inputMode="numeric"
            />
            {errors.paymentPin && <span className="error">{errors.paymentPin}</span>}
          </div>
          <button 
            type="button" 
            className="back-button"
            onClick={() => setPaymentStep(1)}
          >
            Back
          </button>
        </div>
      );
    }
  };

  return (
    <div className="subscription-hero">
      <div className="subscription-header">
        <h1>Upgrade Your Fitness Journey 🚀</h1>
        <p>Choose a plan and unlock exclusive benefits!</p>
      </div>

      <div className="benefits-card">
        <h2>Why Join Us?</h2>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div className="plan-box" key={plan.id}>
            {plan.tag && <div className="plan-tag">{plan.tag}</div>}
            <h3>{plan.title}</h3>
            <div className="plan-price">
              <span className="original">₹{plan.originalPrice}</span>
              <span className="discounted">₹{plan.discountedPrice}</span>
            </div>
            <p className="plan-duration">{plan.duration} Subscription</p>
            <button onClick={() => handleSubscribeClick(plan)} className="join-button">
              Join Now
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="payment-modal">
          <div className="payment-form-container">
            <button className="close-button" onClick={closePaymentForm}>×</button>
            <h2>Complete Your Subscription</h2>
            {paymentStep === 1 && (
              <p>You're subscribing to: <strong>{selectedPlan.title}</strong></p>
            )}
            <p className="payment-amount">Amount to Pay: ₹{selectedPlan.discountedPrice}</p>

            <form onSubmit={handlePaymentSubmit} className="payment-form">
              {renderPaymentStep()}
              <button type="submit" className="submit-payment">
                {paymentStep === 1 ? 'Proceed to Payment' : 'Complete Payment'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;