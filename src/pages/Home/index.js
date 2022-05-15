import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Body from '../Body';
import Rickroll from '../Rickroll';

const MenuItems = [
  {
      name: 'Home',
      code: 0
  },
  {
      name: 'Music',
      code: 1
  },
  {
      name: 'Movies, Etc',
      code: 2
  }
//   {
//       name: 'Certifications',
//       code: 3
//   }
  // {
  //     name: 'Experience',
  //     code: 4
  // }
];

const Home = () => {
  const [activeId, setActiveId] = useState(0);
  const [showRick, setShowRick] = useState(true);

    const SelectItem = (id) => {
       setActiveId(id);
    }

    const CloseRick = () => {
      setShowRick(false);
    }

  return (
    <div style={{ backgroundColor: 'white', width: '100vw', height: '100vh' }}>
      {showRick && <Rickroll action={CloseRick} />}
      {!showRick && (<>
          <Header onNavigate={SelectItem} activePage={activeId} menuItems={MenuItems} />
          <Body onNavigate={SelectItem} activePage={activeId} menuItems={MenuItems} />
          <Footer />
        </>)}
    </div>
  )
}

export default Home;