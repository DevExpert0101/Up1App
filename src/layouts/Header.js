import React, {useEffect, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

// import Logo from './../assets/images/logo.png';
import Logo from './../assets/images/UP1Logo.png';
import LogoWhite from './../assets/images/UP1Logo.png';

function Header(){

    /* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 

    const [sidebarOpen, setSidebarOpen] = useState(false);	
    const [showMenuFeature, setShowMenuFeature] = useState(false);
    const [showMenuProtocol, setShowMenuProtocol] = useState(false);
    const [showMenuIncentives, setShowMenuIncentives] = useState(false);
    const [showMenuCommunity, setShowMenuCommunity] = useState(false);
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
                                    <NavLink to={"#"} className="logo-dark">
                                        <img src={Logo} alt=""  style={{width: '50px'}}/>
                                    </NavLink>
                                </div>                            
                                <ul className="nav navbar-nav navbar">
                                    <li><NavLink to={"/"} onClick={()=>setSidebarOpen(!sidebarOpen)}>Home</NavLink></li>
                                    <li><Link to={"/about-us"} onClick={()=>setSidebarOpen(!sidebarOpen)}>About</Link></li>

                                    <li className={`sub-menu-down ${showMenuFeature ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenuFeature(!showMenuFeature)}
                                      
                                    ><Link to={"/features"}>Features</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Infrastructure</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Prediction Markets</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Integration</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Accessibility</NavLink></li>
                                        </ul>
                                    </li>                                    
                                    
                                    <li className={`sub-menu-down ${showMenuProtocol ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenuProtocol(!showMenuProtocol)}
                                      
                                    ><Link to={"/protocol"}>Protocol</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Whitepaper</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>UP1 Token</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Automated Market Makers</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Security</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Decentalized Governance</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Roadmap</NavLink></li>
                                        </ul>
                                    </li> 


                                    <li className={`sub-menu-down ${showMenuIncentives ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenuIncentives(!showMenuIncentives)}
                                      
                                    ><Link to={"/incentives"}>Incentives</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Reward Systmes</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Staking Mechanism</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Liquidity Provision Rewards</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Prediction and Accuracy Bonuses</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Governance Prediction</NavLink></li>
                                        </ul>
                                    </li> 

                                    <li className={`sub-menu-down ${showMenuCommunity ? "open" : ""}`} id="menushow"
                                       onClick={()=>setShowMenuCommunity(!showMenuCommunity)}                                      
                                    ><Link to={"/community"}>Community</Link>
                                        <ul className="sub-menu">
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Github</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Discord</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Telegram</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Events</NavLink></li>
                                            <li><NavLink to={"#"}onClick={()=>setSidebarOpen(!sidebarOpen)}>Blog</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><Link to={"/contact-us"} onClick={()=>setSidebarOpen(!sidebarOpen)}>Contact</Link></li>
                                    
                                                                       
                                </ul>                               
                            
                                <div className="header-bottom">
                                    
                                    <div className="dz-social-icon">
                                        <ul className="nav navbar-nav navbar mb-5">
                                            <li><a target="_blank" rel="noreferrer" href="https://cryptozone.dexignzone.com/react/demo/login">Login</a></li> 
                                            <li><a target="_blank" rel="noreferrer" href="https://cryptozone.dexignzone.com/react/demo/page-register">Register</a></li>
                                        </ul>
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