// import React from "react";
// import { Link } from "react-router-dom";
// import './App.css'
// function Navbar() {
//   return (
//     <nav>
//       <ul class="nav nav-tabs">
//   <li class="nav-item">
//     <a class="nav-link active" aria-current="page" href="#">Active</a>
//   </li>
//   <li class="nav-item dropdown">
//     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
//     <ul class="dropdown-menu">
//       <li><a class="dropdown-item" href="#">Action</a></li>
//       <li><a class="dropdown-item" href="#">Another action</a></li>
//       <li><a class="dropdown-item" href="#">Something else here</a></li>
//       {/* <li><hr class="dropdown-divider"></li> */}
//       <li><a class="dropdown-item" href="#">Separated link</a></li>
//     </ul>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">Link</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//   </li>
// </ul>


//       <ul>
//       <li>
//           <Link to="/maps">PLANNER</Link>
//         </li>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
        
//       </ul>
//     </nav>



  
//   );
// }

// export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";
// import './Navbar.css'; // Import your CSS file for Navbar styling

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Active</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Plans</a></li>
//             <li><a className="dropdown-item" href="#">suggestion</a></li>
//             <li><Link to="/maps">PLANNER</Link></li>
//             {/* <li><hr className="dropdown-divider"></li> */}
//             <li><a className="dropdown-item" href="#">documentation</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <ul className="nav-links">
//         <li>
//           <Link to="/maps">PLANNER</Link>
//         </li>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap'; 


// const Navbar = () => {
//   const navigate = useNavigate();
//   const [collapseOpen, setCollapseOpen] = useState(false);

//   const handleNavLinkClick = (path) => {
//     navigate(path);
//     setCollapseOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
//       <div className="container-fluid" style={{backgroundColor:'gray'}}>
//         <a className="navbar-brand" onClick={() => handleNavLinkClick('/silver')} style={{cursor: 'pointer'}}>
//           <img src="" style={{ maxHeight: '70px', width: '50px', maxWidth: '100%', height: 'auto', marginLeft: '5px' ,background:'transparent',borderRadius:'10px',padding:'4px',boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',}} alt="Navbar Logo" />
//         </a>
//         <button className="navbar-toggler" type="button" onClick={() => setCollapseOpen(!collapseOpen)}>
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${collapseOpen ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav mr-auto">

//             <Dropdown style={{marginLeft:'10px',backgroundColor:'transparent'}}>
//               <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="nav-link active" style={{paddingTop:'10px',paddingLeft:'0px',marginRight:'10px',color:'#F5F5DC'}}>
//                 1
//               </Dropdown.Toggle>

//               <Dropdown.Menu style={{width:'100%',minWidth:'200px' ,backgroundColor:'#5D54A4'}}>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/silver')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>1</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/silverstock')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>2</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>

//             <Dropdown style={{marginLeft:'10px',backgroundColor:'transparent'} }>
//               <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="nav-link active" style={{paddingTop:'10px',paddingLeft:'0px',marginRight:'10px',color:'#F5F5DC'}}>
//                 2
//               </Dropdown.Toggle>
//               <Dropdown.Menu style={{width:'100%',minWidth:'200px',backgroundColor:'#5D54A4',}}>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/gold')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>1</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/goldstock')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>2</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>            

//             <Dropdown style={{marginLeft:'10px',backgroundColor:'transparent'}}>
//               <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="nav-link active" style={{paddingTop:'10px',color:'#F5F5DC',paddingLeft:'0px',marginRight:'10px'}}>
//               3
//               </Dropdown.Toggle>

//               <Dropdown.Menu style={{width:'100%',minWidth:'200px',backgroundColor:'#5D54A4'}}>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-1')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>1</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-2')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>2</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-3')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>3</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-3')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>4</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleNavLinkClick('/dropdown-action-3')} style={{color:'#FFFFCC',backgroundColor:'#5D54A4'}}>5</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>

//             <li className="nav-item" style={{marginRight:'10px'}}>
//               <button className="nav-link active" style={{margin:'0px',color:'#F5F5DC'}} onClick={() => handleNavLinkClick('/orders')}>4</button>
//             </li>

//             <li className="nav-item" style={{marginRight:'10px'}}>
//               <button className="nav-link active" style={{margin:'0px',color:'#F5F5DC'}} onClick={() => handleNavLinkClick('/price')}>5</button>
//             </li>

//             <li className="nav-item" style={{marginRight:'10px'}}>
//               <button className="nav-link active" style={{margin:'0px',color:'#F5F5DC'}} onClick={() => handleNavLinkClick('/report')}>6</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link active" style={{margin:'0px',color:'#F5F5DC'}} onClick={() => handleNavLinkClick('/invoice')}>Logout</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
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
//          PlanIt
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
                
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s5')}
//               >
//                 s5
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/s6')}
//               >
//                 {/* s6
//               </button>
//             </li>
            
      
//             <li className="nav-item">
//               <button
//                 className="nav-link active"
//                 style={{ margin: '0px', color: '#F5F5DC' }}
//                 onClick={() => handleNavLinkClick('/invoice')}
//               > */}
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [collapseOpen, setCollapseOpen] = useState(false);

  const handleNavLinkClick = (path) => {
    navigate(path);
    setCollapseOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid" style={{ backgroundColor: 'gray' }}>
        <a
          className="navbar-brand"
          onClick={() => handleNavLinkClick('/')}
          style={{ cursor: 'pointer' }}
        >
         PlanIt
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
                style={{ margin: '0px', color: '#F5F5DC' }}
                onClick={() => handleNavLinkClick('/s2')}
              >
                DIY
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                style={{ margin: '0px', color: '#F5F5DC' }}
                onClick={() => handleNavLinkClick('/s3')}
              >
                TEST
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                style={{ margin: '0px', color: '#F5F5DC' }}
                onClick={() => handleNavLinkClick('/s4')}
              >
                s4
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                style={{ margin: '0px', color: '#F5F5DC' }}
                onClick={() => handleNavLinkClick('/s5')}
              >
                s5
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                style={{ margin: '0px', color: '#F5F5DC' }}
                onClick={() => handleNavLinkClick('/invoice')}
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
