import React from 'react';
import { Button, CircularProgress, MenuItem } from '@mui/material'; // Lade till MenuItem
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleOutline } from '@mui/icons-material';

import { SignUpFormData } from '../types/auth'; 
import { useSignUp } from '../hooks/useSignUp';
import { FormInput } from './FormInput';
import { FormCheckbox } from './FormCheckbox';

const SignUpForm = () => {
  const { formMethods, onSubmit, isSuccess, isLoading } = useSignUp();
  const { control } = formMethods;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100 dark:border-slate-700"
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <SuccessView /> 
          ) : (
            <motion.form 
              onSubmit={onSubmit} 
              className="flex flex-col gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Header title="Create Account" subtitle="Sign up to get started" />

              <div className="flex gap-4">
                <FormInput<SignUpFormData> name="firstName" control={control} label="First Name" />
                <FormInput<SignUpFormData> name="lastName" control={control} label="Last Name" />
              </div>

              <FormInput<SignUpFormData> name="email" control={control} label="Email Address" />
              
              <FormInput<SignUpFormData> 
                name="gender" 
                control={control} 
                label="Gender" 
                select
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="prefer_not_to_say">Prefer not to say</MenuItem>
              </FormInput>

              <FormInput<SignUpFormData> name="password" control={control} label="Password" type="password" />
              <FormInput<SignUpFormData> name="confirmPassword" control={control} label="Confirm Password" type="password" />

              <FormCheckbox<SignUpFormData> 
                name="acceptTerms" 
                control={control} 
                label="I agree to the Terms & Privacy Policy" 
              />
              
              <Button 
                type="submit" 
                variant="contained" 
                size="large"
                disabled={isLoading}
                sx={{ bgcolor: '#0f172a', py: 1.5 }}
              >
                {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Header = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-4">
    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">{title}</h1>
    <p className="text-sm text-slate-500 dark:text-slate-300">{subtitle}</p>
  </div>
);

const SuccessView = () => (
   <div className="text-center py-8">
      <CheckCircleOutline color="success" sx={{ fontSize: 90 }} />
      <h2 className="text-3xl font-bold mt-4">Welcome!</h2>
      <Button onClick={() => window.location.reload()} sx={{ mt: 2 }}>
        Go to Dashboard
      </Button>
   </div>
);

export default SignUpForm;