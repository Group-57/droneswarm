// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();
//   const [collapseOpen, setCollapseOpen] = useState(false);

//   const handleNavLinkClick = (path) => {
//     navigate(path);
//     setCollapseOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//       <div className="container-fluid" style={{ backgroundColor: 'gray' }}>
//         <a
//           className="navbar-brand"
//           onClick={() => handleNavLinkClick('/')}
//           style={{ cursor: 'pointer' }}
//         >
//          Planning It
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setCollapseOpen(!collapseOpen)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${collapseOpen ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s2')}
//               >
//                 DIY
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s3')}
//               >
//                 TEST
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s4')}
//               >
//                 Animation
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s5')}
//               >
//                 map
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/invoice')}
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;









// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "./Navbar.css"

// function Navbar() {
//   const navigate = useNavigate();
//   const [collapseOpen, setCollapseOpen] = useState(false);

//   const handleNavLinkClick = (path) => {
//     navigate(path);
//     setCollapseOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//       <div className="container-fluid" style={{ backgroundColor: 'black' }}>
//         <a
//           className="navbar-brand"
//           onClick={() => handleNavLinkClick('/')}
//           style={{ cursor: 'pointer', color: 'gold' }}
//         >
//           SWARM PLANNER
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setCollapseOpen(!collapseOpen)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${collapseOpen ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <button
//                 className="nav-link"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s2')}
//               >
//                 DIY
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/k')}
//               >
//                 TEST
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s4')}
//               >
//                 Animation
//               </button>
//               {/* <Link to = "/s4" className='test-link' style={{background:"black", color:'white'}}> new link</Link> */}
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s5')}
//               >
//                 map
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/invoice')}
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css'; // Ensure this path is correct

// function Navbar() {
//   const navigate = useNavigate();
//   const [collapseOpen, setCollapseOpen] = useState(false);

//   const handleNavLinkClick = (path) => {
//     navigate(path);
//     setCollapseOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg fixed-top">
//       <div className="container-fluid">
//         <a
//           className="navbar-brand"
//           onClick={() => handleNavLinkClick('/')}
//           style={{ cursor: 'pointer', color: 'gold' }}
//         >
//          SWARM PLANNER
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setCollapseOpen(!collapseOpen)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${collapseOpen ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ cursor: 'pointer', color: '#FFF' }}
//                 onClick={() => handleNavLinkClick('/s2')}
//               >
//                 DIY
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 onClick={() => handleNavLinkClick('/s3')}
//                 style={{ cursor: 'pointer', color: '#FFF' }}
//               >
//                 TEST
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 onClick={() => handleNavLinkClick('/s4')}
//                 style={{ cursor: 'pointer', color: '#FFF' }}
//               >
//                 Animation
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 onClick={() => handleNavLinkClick('/s5')}
//                 style={{ cursor: 'pointer', color: '#FFF' }}
//               >
//                 map
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 onClick={() => handleNavLinkClick('/invoice')}
//                 style={{ cursor: 'pointer', color: '#FFF' }}
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  const handleNavLinkClick = (path) => {
    navigate(path);
    setCollapseOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBackground('black');
    } else {
      setNavbarBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setNavbarBackground('black');
    } else {
      setNavbarBackground(window.scrollY > 20 ? 'black' : 'transparent');
    }
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: navbarBackground, transition: 'background-color 0.3s' }}>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => handleNavLinkClick('/')}
          style={{cursor: 'pointer', color: 'gold' }}
        >
          SWARM PLANNER
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapseOpen(!collapseOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${collapseOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button
                className="nav-link active"
                style={{ marginRight:'0px',cursor: 'pointer', color: '#FFF' }}
                onClick={() => handleNavLinkClick('/s2')}
              >
                DIY
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={() => handleNavLinkClick('/s3')}
                style={{ cursor: 'pointer', color: '#FFF' }}
              >
                TEST
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={() => handleNavLinkClick('/s4')}
                style={{ cursor: 'pointer', color: '#FFF' }}
              >
                Animation
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={() => handleNavLinkClick('/map')}
                style={{ cursor: 'pointer', color: '#FFF' }}
              >
                map
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={() => handleNavLinkClick('/invoice')}
                style={{ cursor: 'pointer', color: '#FFF' }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
