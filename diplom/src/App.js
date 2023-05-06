import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Header from './modules/Header';
import Footer from './modules/Footer';
import VideoRoomPage from './pages/VideoRoomPage';
import ConnectionToVideoRoomPage from './pages/ConnectionToVideoRoomPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuthAction } from './store/auth-reduser';
import axios from "axios"
import AdminPage from './pages/AdminPage';
import DoctorPage from './pages/DoctorPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      ( async () => {
        if (localStorage.getItem("token")) {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/refresh`, { withCredentials: true })

          dispatch(checkAuthAction(response))
        }
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videoRoom/:id" element={<VideoRoomPage />} />
        <Route path="/videoRooms" element={<ConnectionToVideoRoomPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/doctor/:userId" element={<DoctorPage />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
