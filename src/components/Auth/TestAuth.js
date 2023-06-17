// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { ProvideAuth } from "./auth";
// import {
//     HomePage,
//     LoginPage,
//     PrivateRoute,
//     PublicPage,
//     AuthButton,
//     ProtectedPage,
// } from "./pages";

// const TestAuth = () => {
//     return (
//         <ProvideAuth>
//             <Router>
//                 <AuthButton />
//                 <div>
//                     <nav>
//                         <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/public">Public Page</Link>
//                             </li>
//                             <li>
//                                 <Link to="/protected">Protected Page</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                     <Routes>
//                         <Route path="/" element={<HomePage />} />
//                         <Route path="/public" element={<PublicPage />} />
//                         <Route path="/login" element={<LoginPage />} />
//                         <Route path="/protected" element={<PrivateRoute />} />
//                     </Routes>
//                 </div>
//             </Router>
//         </ProvideAuth>
//     );
// };

// export default TestAuth;
