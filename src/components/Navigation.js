import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
        <div className='id'>
            <div className='idContent'>
                <img src="./media/Armel2.jpg" alt = "picbill" />
                <h3>Armel Khitchang Tchoufa</h3>
            </div>
        </div>
            <div className='navigation'>
                <ul>
                 <li><NavLink  to="/">
                        <i className='fas fa-home'></i><span>Accueil</span>
                    </NavLink>
                  </li>
                  <li><NavLink  to="/competences">
                        <i className='fas fa-cogs'></i><span>Compétences</span>
                    </NavLink>
                  </li>
                 { /* <li><NavLink  to="/portfolio" >
                        <i className='fa fa-briefcase'></i><span>Portfolio</span>
                    </NavLink>
                  </li> */}
                  <li><NavLink  to="/contact" >
                        <i className='fas fa-address-book'></i><span>Contact</span>
                    </NavLink>
                  </li>
                </ul>
            </div>
            <div className='socialNetwork'>
            <ul>
            <li><a  href="https://cm.linkedin.com/in/armel-khitchang-tchoufa-a58a30182" target="_blank" 
                rel='noopener noreferrer'> <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li><a  href="https://github.com/armelKhitchang" target="_blank" 
                rel='noopener noreferrer'> <i className="fab fa-github"></i>
                </a>
            </li>
            <li><a  href="https://www.google.com" target="_blank" 
                rel='noopener noreferrer'> <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li><a  href="https://codepen.io/Khifamel" target="_blank" 
                rel='noopener noreferrer'> <i className="fab fa-codepen"></i>
                </a>
            </li>
            
            </ul>
            <div className="signature"><p>Armel Khitchang Tchoufa - 2023</p></div>

            </div>

        </div>
    );
};

export default Navigation;