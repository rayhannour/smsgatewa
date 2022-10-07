import React from 'react';

const AppFooter = (props) => {

    return (
        <div className="layout-footer">
            <div className="footer-logo-container">
                <img id="footer-logo" src={`assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} alt="atlantis-layout" />
                <span className="app-name">متابعة الإحصائيات العامة</span>
            </div>
            <span className="copyright">&#169; CGPR(ِComité Generale Des Prisons et de la Réeducation) - 2022</span>
        </div>

    )
}

export default AppFooter;