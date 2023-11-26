import React, {useEffect, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

// import Logo from './../assets/images/logo.png';
import Logo from './../assets/images/UP1Logo2.png';
import LogoWhite from './../assets/images/UP1Logo2.png';

function Header(){

    /* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 

    const [sidebarOpen, setSidebarOpen] = useState(false);	
    const [showMenu, setShowMenu] = useState(false);	   
    return(
        <>
            <header className="site-header mo-left header header-transparent style-1">
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix">
                        <div className="container clearfix">
                            <div className="logo-header" >
                                <Link to={"/"} className="logo-dark"><img src={Logo} width={50} alt="" /></Link>
                                <Link to={"/"} className="logo-light"><img src={LogoWhite}  width={50} alt="" /></Link>
                            </div>
                            
                            <button  type="button"
                                className={`navbar-toggler  navicon justify-content-end ${sidebarOpen ? 'open' : 'collapsed' }`} 
                                onClick={()=>setSidebarOpen(!sidebarOpen)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>                            
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <a className="btn btn-outline-primary text-white" target="_blank" rel="noreferrer" href="https://cryptozone.dexignzone.com/react/demo/login">Login</a>
                                    <a className="btn btn-primary btn-gradient btn-shadow" target="_blank" rel="noreferrer" href="https://cryptozone.dexignzone.com/react/demo/page-register">Register</a>
                                </div>
                            </div>                           
                                
                            <div className={`header-nav navbar-collapse collapse justify-content-end ${sidebarOpen ? "show" : ""}`} id="navbarNavDropdown" >
                                <div className="logo-header mostion">
                                    <NavLink to={"#"} className="logo-dark"><img src={Logo} alt="" /></NavLink>
                                </div>                            
                                <ul className="nav navbar-nav navbar">
                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                    <li><Link to={"/about-us"}>About</Link></li>

                                    <li className={`sub-menu-down ${showMenu ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenu(!showMenu)}
                                      
                                    ><Link to={"/features"}>Features</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"#"}>Infrastructure</NavLink></li>
                                            <li><NavLink to={"#"}>Prediction Markets</NavLink></li>
                                            <li><NavLink to={"#"}>Integration</NavLink></li>
                                            <li><NavLink to={"#"}>Accessibility</NavLink></li>
                                        </ul>
                                    </li>                                    
                                    
                                    <li className={`sub-menu-down ${showMenu ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenu(!showMenu)}
                                      
                                    ><Link to={"/protocol"}>Protocol</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"#"}>Whitepaper</NavLink></li>
                                            <li><NavLink to={"#"}>UP1 Token</NavLink></li>
                                            <li><NavLink to={"#"}>Automated Market Makers</NavLink></li>
                                            <li><NavLink to={"#"}>Security</NavLink></li>
                                            <li><NavLink to={"#"}>Decentalized Governance</NavLink></li>
                                            <li><NavLink to={"#"}>Roadmap</NavLink></li>
                                        </ul>
                                    </li> 


                                    <li className={`sub-menu-down ${showMenu ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenu(!showMenu)}
                                      
                                    ><Link to={"/protocol"}>Incentives</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"#"}>Reward Systmes</NavLink></li>
                                            <li><NavLink to={"#"}>Staking Mechanism</NavLink></li>
                                            <li><NavLink to={"#"}>Liquidity Provision Rewards</NavLink></li>
                                            <li><NavLink to={"#"}>Prediction and Accuracy Bonuses</NavLink></li>
                                            <li><NavLink to={"#"}>Governance Prediction</NavLink></li>
                                        </ul>
                                    </li> 

                                    <li className={`sub-menu-down ${showMenu ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenu(!showMenu)}                                      
                                    ><Link to={"/protocol"}>Community</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"#"}>Github</NavLink></li>
                                            <li><NavLink to={"#"}>Discord</NavLink></li>
                                            <li><NavLink to={"#"}>Telegram</NavLink></li>
                                            <li><NavLink to={"#"}>Events</NavLink></li>
                                        </ul>
                                    </li>
                                    
                                    <li><NavLink to={"/contact-us"}>Contact</NavLink></li>                                    
                                </ul>                               
                            
                                <div className="header-bottom">
                                    <div className="dz-social-icon">
                                        <ul>
                                            <li><a target="_blank" className="fab fa-facebook-f" rel="noreferrer" href="https://www.facebook.com/"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-twitter" rel="noreferrer" href="https://twitter.com/"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-linkedin-in" rel="noreferrer" href="https://www.linkedin.com/"></a></li>{" "}
                                            <li><a target="_blank" className="fab fa-instagram" rel="noreferrer" href="https://www.instagram.com/"></a></li>
                                        </ul>
                                    </div>	
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}
export default Header;