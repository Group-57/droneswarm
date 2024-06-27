// import React from 'react';
// import { Link } from 'react-router-dom';
// import backim11 from './backimage.jpeg'
// import new12 from './new12.png'
// import Navbar from './Navbar';
// import newback from './newback.webp'
// import drone2 from './drones3.jpg'



// function InputNumberComponent() {
//   return (
//     <>
//       <Navbar />
//       <div
//         className='container-fluid d-flex flex-column justify-content-center align-items-center'
//         style={{
//           minHeight: '100vh',
//           backgroundImage: `url(${drone2})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white', // Text color for the title
//         }}
//       >
//         <h1 className='mb-4'>YOUR OWN DRONE SHOW PLANNER</h1>

//         <div className='row'>
//           <div className='col-md-6'>
//             <button className='btn btn-primary btn-block'>
//               <Link to='/s2' className='text-white text-decoration-none'>
//                 Plan Swarm
//               </Link>
//             </button>
//           </div>
//           <div className='col-md-6'>
//             <button className='btn btn-primary btn-block'>
//               <Link to='/maps' className='text-white text-decoration-none'>
//                 Maps
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default InputNumberComponent;

// function InputNumberComponent({  }) {
//   return (
//     <>
//      <Navbar/>
//     <div className='backimage2' style={{ backgroundImage: `url(${new12})` }}>


//      <div className='buttons1'>
//       <button><Link to='s2'>plan Swarm</Link></button>
//       <button ><Link to='maps'>maps</Link></button>
//       </div>
//     </div>
//     </>
//   );
// }

// export default InputNumberComponent;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const MyComponent = ({ })  {
//   return (
//     <div className='backimage2' style={{ backgroundImage: `url(${newback})` }}>


//     <div className='buttons1'>
//       <Link to='/s2'>
//         <button>Plan Swarm</button>
//       </Link>
//       <Link to='/maps'>
//         <button>Maps</button>
//       </Link>
//     </div>
//   );
// };

// export default MyComponent;


import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import drone2 from './drones3.jpg';

function InputNumberComponent() {
  return (
    <>
      <Navbar />
      <div
        className='container-fluid d-flex flex-column justify-content-center align-items-center'
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${drone2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          paddingTop: '50px'
        }}
      >
        <h1 className='mb-4' style={{ marginTop: '-350px' }}>Light UP the Dark SKY....</h1>
        <div className='row w-100 justify-content-center'>
          <div className='col-md-6 text-center'>
            <button
              className='btn btn-primary btn-lg'
              style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
            >
              <Link to='/s2' className='text-white text-decoration-none'>
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputNumberComponent;
