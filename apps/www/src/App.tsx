import type { FC } from 'react';
import { Outlet } from "react-router-dom";
import Nav from './components/nav';
import Footer from './components/footer';

const App: FC = () => {
  return (
    <>
      <Nav />
      <main className='flex-grow min-w-[280px] min-h-screen overflow-hidden'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;