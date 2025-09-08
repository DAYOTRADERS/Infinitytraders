import React from 'react';
import LOGO from '../../../Logo/logo.jpg';

const DerivShortLogo = () => {
    return (
        <div className='header__menu-left-logo'>
            <a href='https://Infinitytraders.site/'>
                <img
                    src={LOGO}
                    alt='Deriv Short Logo'
                    style={{ height: '25px', width: 'auto' }}
                />
            </a>
        </div>
    );
};

export default DerivShortLogo;