import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.png';

const Header = (props) => {
    return (
        <header>
            <div className="wrap" data-test="headerComponent">
                <div className="logo" data-test="logoIMG">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;