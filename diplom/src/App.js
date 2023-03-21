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

function App() {
  return (
    <BrowserRouter>
    <Header>

    </Header>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videoRoom/:id" element={<VideoRoomPage />} />
        <Route path="/videoRooms" element={<ConnectionToVideoRoomPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
      </Routes>


      <Footer>

      </Footer>
    </BrowserRouter>

  );
}

export default App;
