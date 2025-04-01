import React from 'react'

type GoogleSignInButtonProps = {
    onClick: () => void
}

const GoogleSignInButton:React.FC<GoogleSignInButtonProps> = ({ onClick }) => {
    
    return (
        <>
        <h3>Step In</h3>
        <button className='h-16 w-64 bg-white hover:opacity-70 transition-opacity duration-300 ease-in-out rounded-md flex items-center justify-center space-x-3 p-2' onClick={onClick}>
            <img src='/google-logo.png' alt="Google logo" className='h-10' />
            <span className='text-black text-lg'>Sign in with Google</span>
        </button>
        </>
    );
}

export default GoogleSignInButton