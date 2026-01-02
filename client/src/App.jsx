import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import LoadingSpinner from './components/LoadingSpinner';
import BackToTop from './components/BackToTop';
import './styles/App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const List = lazy(() => import('./pages/List'));
const Hotel = lazy(() => import('./pages/Hotel'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Confirmation = lazy(() => import('./pages/Confirmation'));


function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } />
                <Route path="/destinations" element={
                  <PageTransition>
                    <List />
                  </PageTransition>
                } />
                <Route path="/hotels" element={
                  <PageTransition>
                    <List />
                  </PageTransition>
                } />
                <Route path="/hotels/:id" element={
                  <PageTransition>
                    <Hotel />
                  </PageTransition>
                } />

                <Route path="/login" element={
                  <PageTransition>
                    <Login />
                  </PageTransition>
                } />
                <Route path="/register" element={
                  <PageTransition>
                    <Register />
                  </PageTransition>
                } />
                <Route path="/confirmation" element={
                  <PageTransition>
                    <Confirmation />
                  </PageTransition>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;