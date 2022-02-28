import { Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';

const App: React.FC = () => {
  console.log('Nam data is: ');

  return (
    <>
      <h1>Welcome to App</h1>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
