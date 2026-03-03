// RequestProject.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroBackground from '../components/HeroBackground'; 
import { pricingPlans } from '../data/siteData';
import './RequestProject.css';

export default function RequestProject() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    businessName: '',
    businessType: '',
    description: '',
    requirements: '',
    package: 'Starter', // Default selection
  });
  const [alert, setAlert] = useState(null);
  const [alertType, setAlertType] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const lastSubmitRef = useRef(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitized = name === 'mobile' ? value.replace(/\D/g, '') : value;
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
    // Clear any field-level error for this field when the user edits it
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // simple client-side throttle to prevent duplicate rapid submissions
    const now = Date.now();
    if (now - lastSubmitRef.current < 3000) {
      setAlertType('error');
      setAlert('Please wait a few seconds before resubmitting.');
      return;
    }
    lastSubmitRef.current = now;

    setIsSubmitting(true);
    setAlert(null);
    setFieldErrors({});

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://maazehsan.pythonanywhere.com';
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        business_name: formData.businessName,
        business_type: formData.businessType,
        description: formData.description,
        requirements: formData.requirements,
        package: formData.package,
      };
      const response = await fetch(`${apiUrl}/api/project-requests/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.status === 201) {
        const data = await response.json();
        setAlertType('success');
        setAlert(data.message || 'Project request submitted successfully.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          businessName: '',
          businessType: '',
          description: '',
          requirements: '',
          package: 'Starter',
        });
        setFieldErrors({});
      } else if (response.status === 400) {
        const errorData = await response.json();
        // Map backend field keys to form input names
        const keyMap = {
          full_name: 'fullName',
          business_name: 'businessName',
          business_type: 'businessType',
          mobile: 'mobile',
          email: 'email',
          description: 'description',
          requirements: 'requirements',
          package: 'package',
        };
        const newErrors = {};
        Object.keys(errorData).forEach((k) => {
          const mapped = keyMap[k] || k;
          const msg = Array.isArray(errorData[k]) ? errorData[k].join(' ') : String(errorData[k]);
          newErrors[mapped] = msg;
        });
        setFieldErrors(newErrors);
        setAlertType('error');
        setAlert('Please fix the highlighted fields and try again.');
      } else if (response.status === 429) {
        setAlertType('error');
        setAlert('Too many requests. Please try again later.');
      } else {
        // other errors
        let msg = 'Something went wrong. Please try again.';
        try {
          const errJson = await response.json();
          if (errJson && errJson.detail) msg = errJson.detail;
        } catch (_) {}
        setAlertType('error');
        setAlert(msg);
      }
    } catch (err) {
      // Network/CORS or unexpected error
      setAlertType('error');
      if (err instanceof TypeError) {
        setAlert('Network or CORS error. Please check your connection or try again later.');
      } else {
        setAlert('Unexpected error. Please try again later.');
      }
      console.error('Submit error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="request-page">
      <HeroBackground />
      
      <div className="container request-container">
        <motion.div 
          className="request-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="request-title">
            Start Your <span className="request-title-accent">Project Brief</span>
          </h1>
          <p className="request-subtitle">Tell us about your vision. We'll build the rest.</p>
        </motion.div>

        {alert && (
          <motion.div
            className={`request-alert ${alertType === 'error' ? 'request-alert--error' : ''}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {alert}
          </motion.div>
        )}

        <motion.form 
          className="request-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Personal Info */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            {fieldErrors.email && <div className="field-error">{fieldErrors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="+15551234567"
                inputMode="numeric"
                pattern="\d{7,15}"
                title="Enter 7-15 digits, numbers only"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {fieldErrors.mobile && <div className="field-error">{fieldErrors.mobile}</div>}
            </div>
          </div>

          {/* Business Info */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Your Business Name"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
              {fieldErrors.businessName && <div className="field-error">{fieldErrors.businessName}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="businessType">Business Type</label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Type</option>
                <option value="Startup">Startup</option>
                <option value="Small Business">Small Business</option>
                <option value="Enterprise">Enterprise</option>
                <option value="Personal Brand">Personal Brand</option>
                <option value="Portfolio Site">Portfolio Site</option>
                <option value="Other">Other</option>
              </select>
              {fieldErrors.businessType && <div className="field-error">{fieldErrors.businessType}</div>}
            </div>
          </div>

          {/* Project Details */}
          <div className="form-group">
            <label htmlFor="description">Describe Your Business</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="What do you do? Who is your target audience?"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            {fieldErrors.description && <div className="field-error">{fieldErrors.description}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="requirements">Website Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              rows="4"
              placeholder="Specific features, number of pages, design preferences..."
              value={formData.requirements}
              onChange={handleChange}
              required
            ></textarea>
            {fieldErrors.requirements && <div className="field-error">{fieldErrors.requirements}</div>}
          </div>

          {/* Package Selection */}
          <div className="form-group">
            <label>Select Package</label>
            <div className="package-grid">
              {pricingPlans.map((plan) => (
                <label 
                  key={plan.name} 
                  className={`package-card ${formData.package === plan.name ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="package"
                    value={plan.name}
                    checked={formData.package === plan.name}
                    onChange={handleChange}
                  />
                  <div className="package-info">
                    <span className="package-name">{plan.name}</span>
                    <span className="package-price">{plan.price}</span>
                  </div>
                </label>
              ))}
              {fieldErrors.package && <div className="field-error">{fieldErrors.package}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn--primary btn--lg submit-btn" disabled={isSubmitting}>
            <span className="btn__dot" />
            <span className="btn__label">{isSubmitting ? 'Submitting…' : 'Submit Request'}</span>
            <span className="btn__hover">Let's Go →</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
