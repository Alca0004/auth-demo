import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = (props: { error: string }) => {
  if (!props.error) {
    return null;
  }

  return (
    <div className="text-xs text-red-400 flex justify-between items-center">
      <span>
        <b>Error: </b>
        {props.error} !
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

// useEffect(() => {
//     const result = login('aaron@test.com', 'password');
//     setUser(result.user as any);
//     console.log(result);
//   }, []);

//   console.log(user);

export default function Form({ submit }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const onSubmit = (e: any) => {
    e.preventDefault();
    const result = submit(email, password);
    if (result.error) {
      setError(result.error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col my-2">
        <label className="text-xs text-gray-400">Username</label>
        <ErrorMessage error={error} />
        <input
          className="border rounded px-3 py-1 mt-2"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="text-xs text-gray-400">Password</label>
        <input
          className="border rounded px-3 py-1 mt-2"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center my-3">
        <button
          type="submit"
          className="my-3 py-1 w-full rounded bg-blue-600 text-blue-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
