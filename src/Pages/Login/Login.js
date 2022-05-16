import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  // Navigate
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  // React Firebase hooks
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // Schema Validation using yup
  const schema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Event Handler
  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (eUser || gUser) {
      navigate(from, { replace: true });
    }
  }, [eUser, gUser, navigate, from]);
  // Returns
  if (eLoading || gLoading) {
    return <Loading />;
  }
  let signInError;
  if (gError || eError) {
    signInError = (
      <p className='text-center text-error mb-3'>
        {gError?.message || eError?.message}
      </p>
    );
  }

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-sm border-opacity-50 shadow-lg p-8'>
        {signInError}
        <h2 className='text-center text-xl'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <span className='label-text-alt'>Forget Password?</span>
            </label>
          </div>

          <input
            type='submit'
            value='Login'
            className='btn btn-accent w-full mt-5 mb-2'
          />
        </form>

        <p className='text-center text-sm'>
          New to Doctors Portal?{' '}
          <Link to='/signup' className='text-secondary'>
            Create new account
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

export default Login;
