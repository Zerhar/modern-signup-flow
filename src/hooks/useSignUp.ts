import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../schemas/signUpSchema';
import { SignUpFormData } from '../types/auth';

export const useSignUp = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formMethods = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    }
  });

  const onSubmit = formMethods.handleSubmit(async (data) => {
    setIsLoading(true);
    console.log("Submitting secure data:", data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSuccess(true);
  });

  return {
    formMethods, 
    onSubmit,
    isSuccess,
    isLoading
  };
};