import React from 'react';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  // Navigate
  const navigate = useNavigate();
  // React Firebase hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // useToken
  const [token] = useToken(user || gUser);
  // Schema Validation using yup

  const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password required'),
  });

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Event Handler
  const onSubmit = async (data) => {
    const { name, email, password } = data;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  if (token) {
    navigate('/');
  }
  // Returns
  if (loading || gLoading || updating) {
    return <Loading />;
  }
  let signUpError;
  if (error || gError || updateError) {
    signUpError = (
      <p className='text-center text-error mb-3'>
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-sm border-opacity-50 shadow-lg p-8'>
        {signUpError}
        <h2 className='text-center text-xl'>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-sm'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              className='input input-bordered w-full'
              {...register('name')}
            />
            <p className='mt-2 text-sm text-error'>{errors.name?.message}</p>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-sm'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Enter your email'
              className='input input-bordered w-full'
              {...register('email')}
            />
            <p className='mt-2 text-sm text-error'>{errors.email?.message}</p>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-sm'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              className='input input-bordered w-full'
              {...register('password')}
            />
            <p className='mt-2 text-sm text-error'>
              {errors.password?.message}
            </p>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-sm'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm your password'
              className='input input-bordered w-full'
              {...register('confirmPassword')}
            />
            <p className='mt-2 text-sm text-error'>
              {errors.confirmPassword?.message}
            </p>
          </div>

          <input
            type='submit'
            value='Sign Up'
            className='btn btn-accent w-full mt-5 mb-2'
          />
        </form>

        <p className='text-center text-sm'>
          Already have an account?{' '}
          <Link to='/login' className='text-secondary'>
            Login
          </Link>
        </p>

        <div className='divider'>OR</div>

        <button
          onClick={() => signInWithGoogle()}
          className='btn btn-outline uppercase'>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
