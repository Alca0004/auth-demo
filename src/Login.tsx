import { Link } from 'react-router-dom';

import Form from './Form';
import { useAuth } from './Auth';

interface Props {}

export default function Login(props: Props) {
  const { user, login } = useAuth();

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="px-6 py-3 rounded border w-64">
        <div className="flex flex-col items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h2 className="text-2xl font-bold">Login</h2>
        </div>

        <Form submit={login} />

        <div className="flex flex-col items-center justify-center my-3">
          <p className="text-xs text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-gray-700">
              Register
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
