import React from 'react'
import ListItems from './ListItems';
// import Banner from '../assets/Banner.jpg'
import './showcase.css'
import sushi from '../assets/sushi.png'
import sushiPlate from '../assets/sushi-plate.jpeg'
import sushiBoy from '../assets/sushi-boy.avif'
import sushiDelivery from '../assets/sushi-delivery.jpeg'

const LandingPage = () => {
    return(
            <div className="max-w-7xl mx-auto py-6 wrapper-landingPage">
                {/* <div className="max-w-7xl mx-auto py-6 px-4 ">
                    <img className="object-cover h-64 w-full"src={Banner}/>
                </div> */}
                <div className="banner">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <img src={sushi} alt='sushi' className="banner-image"/>
                    <div className="banner-text">
                        <div className="banner-heading">
                            <div>Enjoy Delicious</div>
                            <div>The <span style={{color: '#b0484a'}}>Sushi Food</span></div>
                        </div>
                        <div className="banner-subheading">
                            <p className="subheading-content">We serve the best Japanses foods. Cooked with selected ingredients by a professional chef with an authentic taste. We hope you enjoy our meals!</p>
                        </div>
                        <a href="#menu" className="order-btn">Check menu</a>
                    </div>
                </div>

                <div className="why">
                    <h2 className="why-text">Why us?</h2>
                    <div className='why-category'>
                        <div className='why-item'>
                            <img src={sushiPlate} className='why-item__image'/>
                            <div className='why-item__content'>
                                <div className='why-item__content-heading'><b>Hot Deals & Offers</b></div>
                                <p className='why-item__content-text'>We want to show you some love by giving you discount off food in our restaurants.</p>
                            </div>
                        </div>
                        <div className='why-item'>
                            <img src={sushiBoy} className='why-item__image'/>
                            <div className='why-item__content'>
                                <div className='why-item__content-heading'><b>Self Pick-Up</b></div>
                                <p className='why-item__content-text'>Self Pick-up is a service which allows you to place Self Pick-up orders through our App.</p>
                            </div>
                        </div>
                        <div className='why-item'>
                            <img src={sushiDelivery} className='why-item__image'/>
                            <div className='why-item__content'>
                                <div className='why-item__content-heading'><b>Fastest Delivery</b></div>
                                <p className='why-item__content-text'>Choose your food we will delivered to you as fast as we can.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="menu" className="menu">
                    <h2 className="why-text">Our Specialties</h2>
                    {/* <p className="mt-6 text-sm text-center">In sushi we trust</p> */}
                </div>
                <ListItems/>
            </div>
    );
}
export default LandingPage
