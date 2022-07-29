import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Form from '../components/Form';
import { useAuth } from '../components/Auth';

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  title: string;
  phone?: string;
}

interface Props {}

export default function Dashboard(props: Props) {
  const { user, getFriends, friends } = useAuth();

  useEffect(() => {
    // console.log(user, users);
    getFriends();
  }, []);

  return (
    <div className="relative text-gray-800 bg-gray-50">
      <section className="flex flex-col items-center justify-center h-screen px-8">
        <div className="flex flex-col items-center justify-center text-center h-screen-half">
          <img
            className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
            src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg"
            alt="Your Name Here"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-9xl">
            {user?.firstName} {user?.lastName}
          </h1>
          <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">
            {user?.title}
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-screen px-8">
        <div className="flex flex-col items-center justify-center text-center h-screen-half">
          <pre>{JSON.stringify(friends, null, 2)}</pre>
        </div>
      </section>
      <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
        <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
          <div className="flex flex-col px-10 md:px-20">
            <h3 className="text-xl font-bold">Skills</h3>
            <br />
            <span className="text-lg">Management</span>
            <span className="text-lg">Collaboration</span>
            <span className="text-lg">Communication</span>
            <span className="text-lg">Microsoft Office</span>
          </div>
          <div className="px-10 md:px-20">
            <h3 className="text-xl font-bold">Summary</h3>
            <br />
            <p className="w-full md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              eaque delectus consequuntur harum doloremque assumenda omnis
              quibusdam quia neque, adipisci iste laborum sed nostrum.
            </p>
          </div>
          <div className="px-10 md:px-20">
            <br />
            <h3 className="text-xl font-bold">Contact</h3>
            <a
              className="text-xl hover:text-blue-600"
              href="mailto:test@nomail.com"
            >
              {user?.email}
            </a>
            <p>{user?.phone}</p>
          </div>
        </div>
        <img
          className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
          src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg"
          alt="Your Name Here"
        />
        <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
          <div className="px-20">
            <h4 className="text-xl font-bold">Experience</h4>
            <br />
            <p className="text-6xl">+2</p>
          </div>
          <div className="px-20">
            <h4 className="text-xl font-bold">Projects</h4>
            <br />
            <p className="text-6xl">+25</p>
          </div>
          <div className="px-20">
            <h4 className="text-xl font-bold">Clients</h4>
            <br />
            <p className="text-6xl">+14</p>
          </div>
        </div>
      </section>
    </div>
  );
}
