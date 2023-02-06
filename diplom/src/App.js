import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Header from './modules/Header';
import Footer from './modules/Footer';
import VideoRoomPage from './pages/VideoRoomPage';

function App() {
  return (
    <BrowserRouter>
    <Header>

    </Header>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videoRoom/:id" element={<VideoRoomPage />} />
      </Routes>


      <Footer>

      </Footer>
    </BrowserRouter>

  );
}

export default App;
