import React, {useState} from "react";
import Cookie from "./Cookies";

const Footer = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <footer className="bg-pantone py-6">
            <div className="grid grid-cols-5 px-6 text-custom mt-5"> 
                <div className="text-white mb-32">
                    <h1 className="font-dm-serif text-lg font-semibold mb-6">Shopping with Us</h1>
                    <ul className="list-none">
                        <li className="mb-4 hover:underline">
                            <a href="https://www.wallpaper-it.com/pg/delivery_wpit/">
                                Delivery and Returns
                            </a>
                        </li>
                        <li className="mb-4 hover:underline">
                            <a href="https://www.wallpaper-it.com/pg/sample-service_wpit/">
                                Wallpaper Sample Service
                            </a>
                        </li>
                        <li className="mb-4 hover:underline">
                            <a href="https://www.wallpaper-it.com/pg/privacypolicy_wpit/">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="mb-4 hover:underline">
                            <a href="https://www.wallpaper-it.com/pg/terms_conditions_wpit/">
                                Terms & Conditions
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-white">
                    <h1 className="font-dm-serif font-semibold text-lg font-medium mb-6">Wallpaper Guides</h1>
                    <ul className="list-none">
                        <li className="mb-4 hover:underline">
                            <a href="https://www.wallpaper-it.com/pg/wallpaper-faqs/">
                                Wallpaper FAQs
                            </a>
                        </li>
                        <li className="mb-4 hover:underline">
                            <a href="https://eu-assets.contentstack.com/v3/assets/blte635d907602e0a9c/blt479e92ee1fce9249/62c5945cac24ad7c1c285303/wi-wallpaper-guide.pdf">
                                Wallpaper Guide
                            </a>
                        </li>
                        <li className="mb-4 hover:underline">
                            <a href="https://eu-assets.contentstack.com/v3/assets/blte635d907602e0a9c/bltbe2b3514ea28cd0d/6347ff2bd8465a0f34a1d12a/wi-how-to-hang-wallpaper.pdf">
                                How to Hang Wallpaper
                            </a>
                        </li>
                        <li className="mb-4 hover:underline">
                            <a href="https://eu-assets.contentstack.com/v3/assets/blte635d907602e0a9c/blt6eebc4db16156829/6347fe8dc111ee6d9b70589c/wi-how-to-remove-wallpaper.pdf">
                                How to Remove Wallpaper
                            </a>
                        </li>
                        <li className="mb-4 hover:underline">
                            <a href="https://eu-assets.contentstack.com/v3/assets/blte635d907602e0a9c/bltb468f3d08df996f1/6347ffd58f37810f03d5ab2f/wi-how-to-hang-a-wall-mural.pdf">
                                How to Hang a Wall Mural
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-white">
                    <h1 className="font-dm-serif font-semibold text-lg font-medium mb-6">Visit Us</h1>
                    <ul className="list-none">
                        <li className="mb-2 hover:underline">
                            <a href="https://www.wallpaper-it.com/pg/outlet-stores/">
                                Outlet Stores
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-white">
                    <h1 className="font-dm-serif font-semibold text-lg font-medium mb-6">How Can We Help?</h1>
                    <ul className="list-none">
                        <li className="mb-6 hover:underline">
                            <a href="https://www.wallpaper-it.com/pg/customer-service/">
                                Customer Service
                            </a>
                        </li>
                        
                        <li className="mb-6 hover:underline">
                            <a href="mailto:support@wallpaper-it.zendesk.com">
                                Email Us
                            </a>
                        </li>
                        
                        <li className="mb-6 hover:underline">
                            <a href="https://www.wallpaper-it.com/pg/about_us_wpit/">
                                About Us
                            </a>
                        </li>
                        
                        <li className="mb-6 hover:underline">
                            <a href="tel:08081967578">
                                Call Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className="font-dm-serif text-xl font-semibold text-white text-lg mb-6">Sign up to Our Newsletter</h1>
                    <input type="text" placeholder="Enter your email" className="border rounded-full py-2 px-3 w-full mb-6 placeholder-light-black font-light focus:outline-none"/>
                    <p className="font-thin text-white text-xs mb-6">By signing up you are consenting to receive the newsletter and other promotional materials from Wallpaper It.</p>
                    <button className="font-thin bg-citrus hover:bg-light-green uppercase py-3 px-8 rounded-full w-full">Subscribe</button>
                </div>
            </div>

            <br />
            <div className="border-b border-solid border-white"></div>
            <br />

            <Cookie/>

            <div className="flex justify-between cursor-pointer">
                <div className="flex gap-1 cursor-pointer mx-10">
                    <div className="relative">
                        <button
                            aria-haspopup="true"
                            aria-expanded={isExpanded}
                            type="button"
                            aria-label="Language selector"
                            className="szh-menu-button bg-white text-maire flex justify-center items-center text-14 leading-normal px-3 py-1 border rounded-full"
                            onClick={toggleMenu}
                        >
                            <span className="font-bold mr-2">UK</span> -{" "}
                            <span className="font-light ml-2">GBP</span>
                            <span className="cursor-pointer">
                                <svg
                                    viewBox="0 0 15 8.182"
                                    width="15"
                                    height="8.182"
                                    className="w-3 ml-2.5"
                                >
                                    <path d="M14.8.2a.682.682 0 0 0-.964 0L7.5 6.536 1.164.2a.682.682 0 0 0-.964.964l6.818 6.818a.682.682 0 0 0 .964 0L14.8 1.164a.682.682 0 0 0 0-.964z"></path>
                                </svg>
                            </span>
                        </button>
                        {isExpanded && (
                            <div className="absolute bottom-full w-full bg-white rounded-lg shadow-md py-2 px-3 origin-top-right">
                            <button className="text-xs font-light block w-full text-left hover:bg-gray-100 py-1">United Kingdom</button>
                            <button className="text-xs font-light block w-full text-left hover:bg-gray-100 py-1">USA</button>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-0.5 cursor-pointer mx-7">                    
                        <a target="_blank" href="https://www.facebook.com/WallpaperITofficial/">
                            <svg width="35" height="40" className="mr-5 mt-[2px]">
                                <g transform="translate(-38 -6082)">
                                    <circle data-name="Ellipse 22" cx="17.5" cy="17.5" r="17.5" transform="translate(38 6082)" fill="white"></circle>
                                    <path d="m61.005 6101.375.61-3.981H57.8v-2.584a1.99 1.99 0 0 1 2.245-2.151h1.742v-3.39A21.166 21.166 0 0 0 58.7 6089c-3.146 0-5.2 1.907-5.2 5.359v3.035H50v3.981h3.5V6111h4.3v-9.625z"></path>
                                </g>
                            </svg>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/wallpaper__it/">
                            <svg width="35" height="40" className="mr-5 mt-[2px]">
                                <g transform="translate(-102 -6082)">
                                    <circle data-name="Ellipse 23" cx="17.5" cy="17.5" r="17.5" transform="translate(102 6082)" fill="white"></circle>
                                    <path d="M125.825 6092.928a1.29 1.29 0 1 0 1.29 1.29 1.29 1.29 0 0 0-1.29-1.29zM120.091 6094.582a5.418 5.418 0 1 0 5.418 5.418 5.418 5.418 0 0 0-5.418-5.418zm0 8.888a3.471 3.471 0 1 1 3.47-3.47 3.471 3.471 0 0 1-3.471 3.471z"></path><path d="M124.392 6111h-8.784a6.616 6.616 0 0 1-6.608-6.608v-8.784a6.616 6.616 0 0 1 6.608-6.608h8.784a6.616 6.616 0 0 1 6.608 6.608v8.784a6.616 6.616 0 0 1-6.608 6.608zm-8.784-19.931a4.544 4.544 0 0 0-4.537 4.537v8.786a4.544 4.544 0 0 0 4.537 4.537h8.784a4.544 4.544 0 0 0 4.537-4.537v-8.784a4.544 4.544 0 0 0-4.537-4.537z"></path>
                                </g>
                            </svg>
                        </a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCdksCLJ--zW3HReXhvh272w/?guided_help_flow=5">
                            <svg width="35" height="40" className="mr-5 mt-[2px]"><g transform="translate(-167 -6072)">
                            <circle data-name="Ellipse 24" cx="17.5" cy="17.5" r="17.5" transform="translate(167 6072)" fill="white"></circle>
                            <path d="M196 6087.016a5 5 0 0 0-1.478-3.547 5.063 5.063 0 0 0-3.57-1.469h-12.905a5.031 5.031 0 0 0-5.047 5.016v5.969a5.031 5.031 0 0 0 5.047 5.015h12.906a5.031 5.031 0 0 0 5.047-5.016zm-7.59 3.428-5.785 2.846c-.227.122-1-.041-1-.3v-5.843c0-.26.777-.423 1-.294l5.539 2.995c.229.139.473.473.237.6z"></path></g></svg></a><a target="_blank" href="https://www.pinterest.co.uk/wallpaper__it/">
                            <svg width="35" height="40" className="mr-5 mt-[2px]">
                                <g transform="translate(-231 -6072)">
                                    <circle data-name="Ellipse 25" cx="17.5" cy="17.5" r="17.5" transform="translate(231 6072)" fill="white"></circle>
                                    <path d="M249.3 6079c-6.071 0-9.3 3.864-9.3 8.077 0 1.954 1.1 4.391 2.859 5.163.267.12.413.069.472-.177.053-.187.284-1.088.4-1.513a.387.387 0 0 0-.094-.382 4.988 4.988 0 0 1-1.048-3.04c0-2.939 2.353-5.792 6.356-5.792 3.462 0 5.884 2.233 5.884 5.427 0 3.61-1.923 6.107-4.423 6.107a1.971 1.971 0 0 1-2.087-2.412c.395-1.588 1.169-3.3 1.169-4.441a1.711 1.711 0 0 0-1.782-1.877c-1.406 0-2.551 1.385-2.551 3.244a4.6 4.6 0 0 0 .421 1.979s-1.393 5.588-1.652 6.632a14.738 14.738 0 0 0 .1 4.875.146.146 0 0 0 .266.067 17.288 17.288 0 0 0 2.293-4.289c.172-.628.877-3.176.877-3.176a3.837 3.837 0 0 0 3.231 1.528c4.243 0 7.309-3.7 7.309-8.3-.015-4.4-3.812-7.7-8.7-7.7z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <p className="text-white">© 2023 WallpaperIt</p>
                <div className="flex gap-2.5 cursor-pointer mx-16">
                    <img className="h-8" alt="Visa" src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/blte9d275dcda7d5da6/62e7e465a2057a5e8626b4d6/visa_card.svg?w=1000&q=75" />
                    <img className="h-8" alt="AMEX" src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/blt2b2b6ae7a6532927/62e7e4653147c05e12af7c9d/americanExpress_icon.svg?w=1000&q=75" />
                    <img className="h-8" alt="Maestro" src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/bltd64053decf83e41d/62e7e4641a269564d967fe1a/maestroCard_icon.svg?w=1000&q=75" />
                    <img className="h-8" alt="Mastercard" src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/blt01511e83cc4392d9/62e7e464d59c9f64d3a8215e/mastercard_icon.svg?w=1000&q=75" />
                    <img className="h-8" alt="PayPal" src="https://eu-images.contentstack.com/v3/assets/blte635d907602e0a9c/blt97611fba42ceab68/62e7e464e9d7646bfeda3fc0/payPal_icon.svg?w=1000&q=75"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;