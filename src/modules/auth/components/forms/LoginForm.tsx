import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import InputText from '../../../shared/inputs/InputText';
import PasswordInput from '../../../shared/inputs/PasswordInput';

const validationSchema = () => Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
});

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(validationSchema()),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="mb-4">
        <InputText
          {...register('email')}
          label="Email"
          type='email'
          placeholder="Ej: maria@getnada.com"
          error={errors.email?.message}
        />

        <PasswordInput
          {...register('password')}
          label="Password"
          error={errors.password?.message}
        />
      </div>

      <button type="submit"
        className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
        Login
      </button>

    </form>
  );
};

export default LoginForm;
