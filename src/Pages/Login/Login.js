import React, { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <div className='flex flex-col w-full max-w-sm border-opacity-50 shadow-lg p-8'>
        <h2 className='text-center text-xl'>{login ? 'Login' : 'Sign Up'}</h2>
        <form>
          {login || (
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-sm'>Name</span>
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                className='input input-bordered w-full'
              />
              <label className='label'></label>
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
            />
            <label className='label'></label>
          </div>

          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text text-sm'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              className='input input-bordered w-full'
            />
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
              />
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
        <button className='btn btn-outline uppercase'>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
