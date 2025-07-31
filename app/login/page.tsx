'use client';

import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm';
import InputField from '../../components/ui/InputField';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <AuthForm
      title="Sign in to your account"
      onSubmit={handleSubmit}
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkPath="/register"
    >
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
    </AuthForm>
  );
};

export default LoginPage;