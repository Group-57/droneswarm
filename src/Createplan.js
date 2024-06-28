// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import video from './dronevid2.mp4';

// function InputNumberComponent() {
//   return (
//     <>
//       {/* <Navbar/> */}
//       <div
//         className="container-fluid d-flex flex-column justify-content-center align-items-center"
//         style={{
//           minHeight: '100vh',
//           position: 'relative',
//           overflow: 'hidden',
//           // backgroundColor:'black'
//         }}
//       >
//         {/* Full-screen video */}
//         <video
//           autoPlay
//           loop
//           muted
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             width: '100vw',
//             height: '100vh',
//             objectFit: 'cover',
//             transform: 'translate(-50%, -50%)',
//             zIndex: -1,
//           }}
//         >
//           <source src={video} type="video/mp4" />
//         </video>

//         {/* Content on top of video */}
//         <div
//           className="text-center"
//           style={{
//             position: 'relative',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             zIndex: 1,
//             color: 'white',
//             textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // Text shadow for better readability
//           }}
//         >
//           <h1
//             className="mb-4"
//             style={{
//               fontSize: '2rem',
//               marginBottom: '2rem',
//               marginLeft: '1000px',
//               marginTop: '550px',
              
//               color: 'white',
//             }}
//           >
//             Light Up The

//           </h1>
//           <h3
//             className="mb-4"
//             style={{
//               fontSize: '3rem',
//               // marginBottom: '2rem',
//               marginLeft: '1000px',
//               // marginTop: '500px',
//               color: 'gold',
//             }}
//           >
            
//             Night Sky
//           </h3>

//           {/* Get Started button */}
//           {/* <button
//             style={{
//               backgroundColor: 'blue',
//               borderColor: '#000001',
//               padding: '10px 15px',
//               fontSize: '1rem',
//               whiteSpace: 'nowrap',
//               width: 'fit-content',
//               display: 'flex',
//             }}
//           >
//             <Link to="/s2" className="text-white text-decoration-none">
//               Get Started 
//               <span style={{ fontWeight: 300, fontSize: 'larger', fontStyle: 'bold' }}>
//                 {' ->'}
//               </span>
//             </Link>
//           </button> */}
//         </div>
//       </div>

//       {/* Introduction Section */}
//       <div
//         className="introduction-section"
//         style={{
//           backgroundColor: 'black',
//           color: 'white',
//           height: '1000px',
//           padding: '200px 200px',
//           textAlign: 'center',
//         }}
//       >
//         <h2>Welcome to Our Show!</h2>
//         <p>
//           Experience the magic of drones lighting up the night sky. Our drone shows
//           are a perfect blend of technology and artistry, creating unforgettable
//           moments for every occasion. Whether it's a festival, wedding, or a corporate
//           event, we bring your vision to life with dazzling aerial displays.
//         </p>
//         <button
//             style={{
//               backgroundColor: 'blue',
//               borderColor: '#000001',
//               padding: '10px 15px',
//               fontSize: '1rem',
//               marginLeft:'450px',
//               whiteSpace: 'nowrap',
//               width: 'fit-content',
//               display: 'flex',
//             }}
//           >
//             <Link to="/s2" className="text-white text-decoration-none">
//               Get Started 
//               <span style={{ fontWeight: 300, fontSize: 'larger', fontStyle: 'bold' }}>
//                 {' ->'}
//               </span>
//             </Link>
//           </button>
//       </div>
//     </>
//   );
// }

// export default InputNumberComponent;


//CHATGPT

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import video from './dronevid2.mp4';

function InputNumberComponent() {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 3000); // 3000ms delay (3 seconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          // backgroundColor:'black'
        }}
      >
        {/* Full-screen video */}
        <video
          ref={videoRef}
          loop
          muted
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }}
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Content on top of video */}
        <div
          className="text-center"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 1,
            color: 'white',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // Text shadow for better readability
          }}
        >
          <h2
            className="mb-4"
            style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              marginLeft: '1000px',
              marginTop: '550px',
              color: 'white',
            }}
          >
            Light up the
          </h2>
          <h1
            className="mb-4"
            style={{
              fontSize: '3rem',
              marginLeft: '1000px',
              color: 'gold',
            }}
          >
            Night Sky
          </h1>

          {/* Get Started button */}
          {/* <button
            style={{
              backgroundColor: 'blue',
              borderColor: '#000001',
              padding: '10px 15px',
              fontSize: '1rem',
              whiteSpace: 'nowrap',
              width: 'fit-content',
              display: 'flex',
            }}
          >
            <Link to="/s2" className="text-white text-decoration-none">
              Get Started 
              <span style={{ fontWeight: 300, fontSize: 'larger', fontStyle: 'bold' }}>
                {' ->'}
              </span>
            </Link>
          </button> */}
        </div>
      </div>

      {/* Introduction Section */}
      <div
        className="introduction-section"
        style={{
          backgroundColor: 'black',
          color: 'white',
          height: '1000px',
          padding: '200px 200px',
          textAlign: 'center',
        }}
      >
        <h2>Welcome to Our Show!</h2>
        <p>
          Experience the magic of drones lighting up the night sky. Our drone shows
          are a perfect blend of technology and artistry, creating unforgettable
          moments for every occasion. Whether it's a festival, wedding, or a corporate
          event, we bring your vision to life with dazzling aerial displays.
        </p>
        <button
          style={{
            backgroundColor: 'blue',
            borderColor: '#000001',
            padding: '10px 15px',
            fontSize: '1rem',
            marginLeft: '450px',
            whiteSpace: 'nowrap',
            width: 'fit-content',
            display: 'flex',
          }}
        >
          <Link to="/s2" className="text-white text-decoration-none">
            Get Started 
            <span style={{ fontWeight: 300, fontSize: 'larger', fontStyle: 'bold' }}>
              {' ->'}
            </span>
          </Link>
        </button>
      </div>
    </>
  );
}

export default InputNumberComponent;
