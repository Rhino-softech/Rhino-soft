'use client';

import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm';
import InputField from '../../components/ui/InputField';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted', { name, email, password, confirmPassword });
  };

  return (
    <AuthForm
      title="Create a new account"
      onSubmit={handleSubmit}
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkPath="/login"
    >
      <InputField
        id="name"
        label="Full name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
      />
      <InputField
        id="email"
        label="Email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <InputField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />
    </AuthForm>
  );
};

export default RegisterPage;