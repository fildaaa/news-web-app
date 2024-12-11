import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Berita Indonesia</Link>
                </li>
                <li>
                    <Link to="/Programming">Programming</Link>
                </li>
                <li>
                    <Link to="/Saved">Saved</Link>
                </li>
                <li>
                    <Link to="/Search">Search</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;



// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">Indonesia</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/programming">Programming</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/saved">Saved</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/search">Search</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// import Search from './Search';

// const Header = ({ title, inputValue, setInputValue, onSearch }) => (
//   <nav
//     className="navbar navbar-expand-lg"
//     style={{ backgroundColor: 'pink', position: 'sticky', top: 0, left: 0, right: 0, zIndex: 1000 }}
//   >
//     <div className="container-fluid ms-5 me-5">
//       <h1 className="mb-0" style={{ color: '#DA1884', fontSize: '24px', fontWeight: 'bold' }}>
//         {title}
//       </h1>
//       <div className="ms-auto">
//         <Search inputValue={inputValue} setInputValue={setInputValue} handleSearch={onSearch} />
//       </div>
//     </div>
//   </nav>
// );

// export default Header;
