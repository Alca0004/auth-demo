import { useContext, useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext<any>({
  user: undefined,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthContainer({ children }: any) {
  const auth = _useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const _useAuth = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(undefined);
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/users', {
        headers: { authorization: token },
      });
      console.log(data);
      if (data?.users?.length) {
        setFriends(data.users);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      console.log('From Backend', data);

      setUser(data.user);
      setToken(data.token);

      return data;
    } catch (error: any) {
      console.log(error.response.status);
      console.log(error);
    }
  };

  const register = async (email: string, password: string) => {
    const { data } = await axios.post('http://localhost:3001/register', {
      email,
      password,
    });
    console.log('From Backend', data);

    setUser(data.user);
    setToken(data.token);

    return data;
  };

  return { user, login, register, getFriends, friends };
};
