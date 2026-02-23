import React from 'react';
import useIsMobile from './hooks/useIsMobile';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';

const Login = () => {
    const isMobile = useIsMobile();
    return isMobile ? <LoginMobile /> : <LoginDesktop />;
};

export default Login;
