import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import logo from '../../assets/logo192.png'; 
import wf41_logo from '../../assets/wf41_logo.png';
import wf41_name_logo from '../../assets/wf41_name_logo_nobg.png';
import wf41_fullname_logo from '../../assets/wf41_fullname_logo_nobg.png';
import wf41_fullname_logo_with_tag from '../../assets/logo_with_tage_nobg.png';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();
    return (
        <nav className='flex flex-row justify-between items-center w-full z-20 fixed top-0 left-0 h-24 border-b bg-gray-800 px-4'>
            <div className='flex items-center'>
                <img src={wf41_logo} alt="Logo" className='h-16 mr-4' />
                <img src={wf41_fullname_logo_with_tag} alt="Logo" className='h-20 mr-4' />
                {/* <span className='text-white text-lg font-bold'>WORKFORCE41</span> */}
            </div>
            <div className='flex gap-x-4'>
                <Link className='text-white py-2 px-4 hover:underline' to={'/about-us'}>
                    About Us
                </Link>
                <Link className='text-white py-2 px-4 hover:underline' to={'/contact-us'}>
                    Contact Us
                </Link>
                {userLoggedIn && (
                    <button
                        onClick={() => { doSignOut().then(() => { navigate('/login') }) }}
                        className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Header;
