import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);




  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome! to your portfolio</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <p className="text-lg mb-4">
            <h3 className="mt-3 text-left text-2xl font-bold text-gray-900">Hi! I'm Sonendra</h3>
            <p>I am a UI/UX & Web Designer</p>
          </p>
          <button
            onClick={handleLogout}
            className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
              
            ))}


          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
