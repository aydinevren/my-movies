import React from 'react';
import './Footer.css';


class Footer extends React.Component {


    render() {
        return (
            <div className="navbarmenu">

                    <a href="#home">Home |</a>
                    
                    <a href="#about"> About |</a>
                    
                    <a href="#contact"> Contact</a>
                   
                    <div className="footerinfo">
                    <p/>
                        Design By Aydın Evren | Tüm hakları saklıdır. | &copy; 2021 
                    </div>

            </div>
        )
    }

}

export default Footer;