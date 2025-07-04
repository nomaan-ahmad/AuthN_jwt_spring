import { useState } from 'react';
     import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
     import axios from 'axios';
     import './index.css';

     function App() {
         const [token, setToken] = useState(localStorage.getItem('token') || '');
         const navigate = useNavigate();

         const setAuthToken = (newToken) => {
             setToken(newToken);
             localStorage.setItem('token', newToken);
         };

         const logout = () => {
             setToken('');
             localStorage.removeItem('token');
             navigate('/login');
         };

         return (
             <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
                 <Routes>
                     <Route path="/login" element={token ? <Navigate to="/protected" /> : <Login setToken={setAuthToken} />} />
                     <Route path="/register" element={token ? <Navigate to="/protected" /> : <Register setToken={setAuthToken} />} />
                     <Route path="/protected" element={token ? <Protected token={token} logout={logout} /> : <Navigate to="/login" />} />
                     <Route path="/" element={<Navigate to={token ? "/protected" : "/login"} />} />
                 </Routes>
             </div>
         );
     }

     function Login({ setToken }) {
         const [username, setUsername] = useState('');
         const [password, setPassword] = useState('');
         const [message, setMessage] = useState('');
         const navigate = useNavigate();

         const handleLogin = async () => {
             try {
                 const response = await axios.post('/api/login', { username, password });
                 setToken(response.data);
                 setMessage('Login successful');
                 navigate('/protected');
             } catch (error) {
                 setMessage(error.response?.data || 'Login failed');
             }
         };

         return (
             <div>
                 <h1 className="text-2xl font-bold mb-4">Login</h1>
                 <input
                     type="text"
                     placeholder="Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="w-full p-2 mb-2 border rounded"
                 />
                 <input
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full p-2 mb-2 border rounded"
                 />
                 <button
                     onClick={handleLogin}
                     className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                 >
                     Login
                 </button>
                 <p className="mt-2">
                     Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
                 </p>
                 {message && <p className="mt-2 text-red-500">{message}</p>}
             </div>
         );
     }

     function Register({ setToken }) {
         const [username, setUsername] = useState('');
         const [password, setPassword] = useState('');
         const [message, setMessage] = useState('');
         const navigate = useNavigate();

         const handleRegister = async () => {
             try {
                 const response = await axios.post('/api/register', { username, password });
                 setMessage(response.data);
                 navigate('/login');
             } catch (error) {
                 setMessage(error.response?.data || 'Registration failed');
             }
         };

         return (
             <div>
                 <h1 className="text-2xl font-bold mb-4">Register</h1>
                 <input
                     type="text"
                     placeholder="Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="w-full p-2 mb-2 border rounded"
                 />
                 <input
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full p-2 mb-2 border rounded"
                 />
                 <button
                     onClick={handleRegister}
                     className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                 >
                     Register
                 </button>
                 <p className="mt-2">
                     Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                 </p>
                 {message && <p className="mt-2 text-red-500">{message}</p>}
             </div>
         );
     }

     function Protected({ token, logout }) {
         const [message, setMessage] = useState('');

         React.useEffect(() => {
             const fetchProtected = async () => {
                 try {
                     const response = await axios.get('/api/protected', {
                         headers: { Authorization: `Bearer ${token}` },
                     });
                     setMessage(response.data);
                 } catch (error) {
                     setMessage(error.response?.data || 'Failed to access protected endpoint');
                 }
             };
             fetchProtected();
         }, [token]);

         return (
             <div>
                 <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
                 <p className="mb-4">{message}</p>
                 <button
                     onClick={logout}
                     className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                 >
                     Logout
                 </button>
             </div>
         );
     }

     export default App;