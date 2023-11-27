import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import ScrollToTop from './../layouts/ScrollToTop';
import Header from './../layouts/Header';
import Footer from './../layouts/Footer';
import Home from './Home';
import AboutUs from './About';
import Pricing from './Pricing';
import Protocol from './Protocol';
import Incentive from './Incentives';
import BlogList from './BlogList';
import BlogGrid from './BlogGrid';
import BlogDetails from './BlogDetails';
import ContactUs from './Contract';
import Features from './Features';
import Community from './Community';

function Index(){
	return(
		<BrowserRouter basename="/">
			<div className="page-wraper">
					<Header />
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path='/about-us' exact element={<AboutUs />} />
						<Route path='/pricing' exact element={<Pricing />} />
						<Route path='/features' exact element={<Features />} />
						<Route path='/protocol' exact element={<Protocol />} />
						<Route path='/incentives' exact element={<Incentive />} />
						<Route path='/community' exact element={<Community />} />

						<Route path='/blog-list' exact element={<BlogList />} />
						<Route path='/blog-grid' exact element={<BlogGrid />} />
						<Route path='/blog-details' exact element={<BlogDetails />} />
						<Route path='/contact-us' exact element={<ContactUs />} />
					</Routes>
					<Footer />
				<ScrollToTop />
			</div>
		 </BrowserRouter>			
	)
} 
export default Index;