import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-04.png`)}
                            alt='Live Weather'

                        />
                        <div className="content">
                            <h3>Live Weather</h3>
                            <p>
                                Weather Details for any Location, including the User's Current Location.
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> Bootstrap
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://itsahil1.github.io/WeatherApp/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/itSahil1/WeatherApp.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-01.png`)}
                            alt='Password Generation'

                        />
                        <div className="content">
                            <h3>Password Generator</h3>
                            <p>
                            Generating Secure Passwords with Customizable Options for Length and Complexity.
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> Tailwind
                                <span> -</span> JavaScript
                                <span> -</span> ReactJS
                                <span> -</span> React Router
                            </p>
                            <a href="https://itsahil1.github.io/Password-generation-App/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/itSahil1/Password-generation-App.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app03.png`)}
                            alt=''

                        />
                        <div className="content">
                            <h3>ECOMZY eCommerce based WebApplication</h3>
                            <p>
                             ECOMZY, an eCommerce web application with intuitive user interfaces and seamless navigation.
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> Tailwind
                                <span> -</span> JavaScript
                                <span> -</span> React.js
                                <span> -</span> Redux Toolkit
                                <span> -</span>React-Router
                            </p>
                            <a href="https://peppy-lolly-46fea3.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/sahil-562/ECOMZY-eCommerce-website.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-05.png`)}
                            alt='Sharemodal App'
                        />
                        <div className="content">
                            <h3>Sharemodal App</h3>
                            <p>
                             Sharemodal, an app using ReactJS, focused on creating a dynamic and responsive user interface.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span>React.js
                                <span> -</span> TailwindCSS
                            </p>
                            <a href="https://itsahil1.github.io/ShareMondal/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/itSahil1/ShareMondal.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-06.png`)}
                            alt='Pepsi landing Page 3D'
                        />
                        <div className="content">
                            <h3>Pepsi landing Page 3D</h3>
                            <p>
                             3D Pepsi landing page, showcasing interactive and visually engaging design elements.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> TailwindCSS
                                <span> -</span> JavaScript
                                <span> -</span> npm packages
                            </p>
                            <a href="https://itsahil1.github.io/Pepsi-landing-page/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/itSahil1/Pepsi-landing-page.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app02.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Razorpay</h3>
                            <p>
                                Razorpay(Clone) Full Fledge website.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> Tailwind
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://transcendent-malasada-a5a12a.netlify.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/sahil-562/RazorPayClone.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-07.png`)}
                            alt='Movies Streaming webApplication'
                        />
                        <div className="content">
                            <h3>Cinema LiveStreaming WebApplication</h3>
                            <p>
                            Developed a Cinema Live Streaming web application, enabling real-time streaming with a user-friendly interface.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span>Bootstrap
                                <span> -</span>TailwindCSS
                                <span> -</span> JavaScript
                                <span> -</span> React.js
                                <span> -</span>context API
                                <span> -</span> React-Router
                                <span> -</span> Redux
                               
                            </p>
                            <a href="https://cinemawebapplication.netlify.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/sahil-562/Cinema_LiveStreaming_WebApplication.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app.png`)}
                            alt='Real Live Dashboard'

                        />
                        <div className="content">
                            <h3>Real Live Dashboard App</h3>
                            <p>
                            Developed a Real Live Dashboard App, providing real-time data visualization and analytics.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> Bootstrap
                                <span> -</span> Tailwind
                                <span> -</span> JavaScript
                                <span> -</span> ReactJS
                                <span> -</span> React Router
                                <span> -</span> ApexChart.js

                            </p>
                            <a href="https://reallivedashboard.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/sahil-562/RealDashboard.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-11.png`)}
                            alt=' Random Meme Generation application'

                        />
                        <div className="content">
                            <h3>Random Meme Generation application</h3>
                            <p>
                                
A web application that generates and displays random memes at the click of a button.
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> API's
                                <span> -</span> Tailwind
                                <span> -</span> JavaScript
                                <span> -</span> ReactJS
                                <span> -</span> React Router
                            </p>
                            <a href="https://itsahil1.github.io/memGfg/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/itSahil1/memGfg.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                     
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-10.png`)}
                            alt=' counter app'

                        />
                        <div className="content">
                            <h3> Counter Game based web-Application</h3>
                            <p>
                            A web application where players compete by counting numbers under specific rules, with the goal of reaching a target first.
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> Tailwind
                                <span> -</span> JavaScript
                                <span> -</span> ReactJS
                                <span> -</span> React Router
                            </p>  
                            <a href="https://itsahil1.github.io/counterapp/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/itSahil1/counterapp.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-9.png`)}
                            alt=' Tic-Tac-Toe game'

                        />
                        <div className="content">
                            <h3>Tic-Tac-Toe game</h3>
                            <p>
                            Game with Interactive UI and Real-Time Gameplay Functionality.
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> Tailwind
                                <span> -</span> JavaScript
                                <span> -</span> React.Js
                                <span> -</span> React Router
                               

                            </p>
                            <a href="https://itsahil1.github.io/TicTacToe/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/itSahil1/TicTacToe.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-5.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Premier Food</h3>
                            <p>
                                Fast food
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Sass
                            </p>
                            <a href="https://nahuel61920.github.io/PremierFood/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PremierFood" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                    
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-8.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>ShopTec</h3>
                            <p>
                                Ecommerce
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> Sass
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/shop-tec/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/shop-tec" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}

                    {/* <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-10.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Elegant Hand</h3>
                            <p>
                                Watch Shop
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/ElegantHand/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/ElegantHand" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}

                    {/* <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-9.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Vida en papel</h3>
                            <p>
                                Bookstore
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/vida-en-papel/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/vida-en-papel" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}

                    {/* <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-11.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Plus Anime</h3>
                            <p>
                                Anime website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/PlusAnime/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PlusAnime" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}

                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);