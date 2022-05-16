import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // Login Page State
  const [login, setLogin] = useState(true);
  // Navigate
  const navigate = useNavigate();

  // React Firebase hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  // Schema Validation using yup
  let schema;
  if (!login) {
    schema = yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password required'),
    });
  } else {
    schema = yup.object({
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required'),
    });
  }
  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Event Handler
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    if (login) {
      signInWithEmailAndPassword(email, password);
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
    await navigate('/');
  };

  // UseEffect
  useEffect(() => {
    reset();
  }, [login]);

  // Returns
  if (loading || eLoading || gLoading) {
    return <Loading />;
  }
  let authError;
  if (error || gError || eError) {
    authError = (
      <p className='text-center text-error mb-3'>
        {error?.message || gError?.message || eError?.message}
      </p>
    );
  }

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-sm border-opacity-50 shadow-lg p-8'>
        {authError}
        <h2 className='text-center text-xl'>{login ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {login || (
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
          )}

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
            <label className='label'>
              {login && (
                <span className='label-text-alt'>Forget Password?</span>
              )}
            </label>
          </div>

          {login || (
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
          )}

          <input
            type='submit'
            value={login ? 'Login' : 'Sign Up'}
            className='btn btn-accen w-full mt-5 mb-2'
          />
        </form>

        <p className='text-center text-sm'>
          {login ? (
            <>
              New to Doctors Portal?{' '}
              <button
                onClick={() => setLogin(false)}
                className='text-secondary'>
                Create new account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setLogin(true)} className='text-secondary'>
                Login
              </button>
            </>
          )}
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

export default Login;
