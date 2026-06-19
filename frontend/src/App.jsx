import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JennyProfile from './pages/1';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JennyProfile/>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;