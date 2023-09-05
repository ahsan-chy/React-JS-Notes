<<<<<<< HEAD
// import React from 'react'
// import { Container, Grid, Box, Link } from '@material-ui/core'

// const Footer = () => {
// const textStyle = {
//   color: '#b1b1b1',
//   textDecoration: 'none'
// }
//   return (
//     <footer>
//       <Box style={{
//         backgroundColor:"#001E3C",
//         color:"#FFF",
//         marginTop:"100px"
//       }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={5}>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Title</Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Title</Box>
//               <Box>
//                 <Link  style={textStyle}> Container</Link>
//               </Box>
//               <Box>
//                 <Link style={textStyle}>Sub Heading</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Title</Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
      
//     </footer>
//   )
// }

// export default Footer

import React from 'react';
import '../assets/css/footer.css'
import { FaAngleRight , FaMapMarkerAlt, FaEnvelope, FaMobileAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
     <footer className="text-center text-lg-start  text-white footer" style={{backgroundColor:"#001E3C"}}>

        <section className="py-1">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <img src='https://cdn-icons-png.flaticon.com/512/888/888865.png' style={{width:'70px'}} alt="Logo"/>                
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Explore </h6>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">Search</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">ContactUs</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">AboutUs</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="/registration" className="text-reset">SignUp</Link>
                </p>
                
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Our Services
                </h6>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">App Development </Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">Website Development</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">Digital Marketing</Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p><FaMapMarkerAlt/> &nbsp; Jeff Heights Lahore</p>
                <p>
                  <FaEnvelope /> &nbsp; hellostore@gmail.com
                </p>
                <p><FaMobileAlt/> &nbsp;  +923 146 604 298</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2022 Copyright: 
          <Link className="text-reset fw-bold" to="/"> Hello Store</Link>
        </div>
        {/* Copyright */}
      </footer>
    </>
  )
}

=======
// import React from 'react'
// import { Container, Grid, Box, Link } from '@material-ui/core'

// const Footer = () => {
// const textStyle = {
//   color: '#b1b1b1',
//   textDecoration: 'none'
// }
//   return (
//     <footer>
//       <Box style={{
//         backgroundColor:"#001E3C",
//         color:"#FFF",
//         marginTop:"100px"
//       }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={5}>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Title</Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Title</Box>
//               <Box>
//                 <Link  style={textStyle}> Container</Link>
//               </Box>
//               <Box>
//                 <Link style={textStyle}>Sub Heading</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Title</Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//               <Box>
//                 <Link  style={textStyle}>Container</Link>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
      
//     </footer>
//   )
// }

// export default Footer

import React from 'react';
import '../assets/css/footer.css'
import { FaAngleRight , FaMapMarkerAlt, FaEnvelope, FaMobileAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
     <footer className="text-center text-lg-start  text-white footer" style={{backgroundColor:"#001E3C"}}>

        <section className="py-1">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <img src='https://cdn-icons-png.flaticon.com/512/888/888865.png' style={{width:'70px'}} alt="Logo"/>                
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Explore </h6>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">Search</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">ContactUs</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">AboutUs</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="/registration" className="text-reset">SignUp</Link>
                </p>
                
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Our Services
                </h6>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">App Development </Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">Website Development</Link>
                </p>
                <p>
                  <FaAngleRight/><Link to="#!" className="text-reset">Digital Marketing</Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p><FaMapMarkerAlt/> &nbsp; Jeff Heights Lahore</p>
                <p>
                  <FaEnvelope /> &nbsp; hellostore@gmail.com
                </p>
                <p><FaMobileAlt/> &nbsp;  +923 146 604 298</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2022 Copyright: 
          <Link className="text-reset fw-bold" to="/"> Hello Store</Link>
        </div>
        {/* Copyright */}
      </footer>
    </>
  )
}

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
export default Footer