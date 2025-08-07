import './App.css';
import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { useThemeStore } from './stores/themeStore';
import Loader from './components/Loader';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Shop = lazy(() => import('./pages/Shop'));

function App() {
  const isDark = useThemeStore((state) => state.isDark);

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);


  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div className={`min-h-screen transition-colors duration-700 ease-in-out ${isDark ? 'bg-black text-white' : 'bg-[#FCFAF7] text-black'}`}>
        <Router>
          <Suspense fallback={<Loader />}>
            {showLoader ? (
              <Loader />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            )}
          </Suspense>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
