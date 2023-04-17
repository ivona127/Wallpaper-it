import React, {useState} from "react";

const Menu = () => {
    const [showWallpaperDropdown, setShowWallpaperDropdown] = useState(false);
    const [showPaintDropdown, setShowPaintDropdown] = useState(false);
    const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
    const [showWallArtDropdown, setShowWallArtDropdown] = useState(false);

    const toggleWallpaperDropdown = () => setShowWallpaperDropdown(!showWallpaperDropdown);
    const togglePaintDropdown = () => setShowPaintDropdown(!showPaintDropdown);
    const toggleBrandsDropdown = () => setShowBrandsDropdown(!showBrandsDropdown);
    const toggleWallArtDropdown = () => setShowWallArtDropdown(!showWallArtDropdown);

    return(
            <nav className="w-full absolute mt-5">
                <ul className="flex justify-between cursor-pointer ">
                    <li className="mx-auto" onMouseLeave={toggleWallpaperDropdown}>
                        <a 
                            onMouseOver={toggleWallpaperDropdown} 
                            className="nav-item font-light"
                        > 
                            WALLPAPER
                            <i className="arrow-down font-light"></i>
                        </a>
                        {
                            showWallpaperDropdown && (
                                <ul className="bg-white">
                                    <li><a className="menu-option">Animal </a></li>
                                    <li><a className="menu-option">Bird </a></li>
                                    <li><a className="menu-option">Brick </a></li>
                                    <li><a className="menu-option">Damask</a></li>
                                    <li><a className="menu-option">Floral </a></li>
                                </ul>
                            )
                        }
                    </li>

                    <li className="mx-auto" onMouseLeave={togglePaintDropdown}>
                        <a 
                            onMouseOver={togglePaintDropdown} 
                            className="nav-item font-light"
                        > 
                            PAINT
                            <i className="arrow-down"></i>
                        </a>
                        {
                            showPaintDropdown && (
                                <ul className="bg-white">
                                    <li><a className="menu-option">Blue </a></li>
                                    <li><a className="menu-option">Green </a></li>
                                    <li><a className="menu-option">Grey </a></li>
                                    <li><a className="menu-option">Neutral</a></li>
                                    <li><a className="menu-option">Pink </a></li>
                                </ul>
                            )
                        }
                    </li>

                    <li className="mx-auto" onMouseLeave={toggleBrandsDropdown}>
                        <a 
                            onMouseOver={toggleBrandsDropdown} 
                            className="nav-item font-light"
                        > 
                            BRANDS
                            <i className="arrow-down font-light"></i>
                        </a>
                        {
                            showBrandsDropdown && (
                                <ul className="bg-white">
                                    <li><a className="menu-option">Joules</a></li>
                                    <li><a className="menu-option">Laura Ashley</a></li>
                                    <li><a className="menu-option">Superfresco Easy Paint</a></li>
                                    <li><a className="menu-option">Superfresco Easy</a></li>
                                    <li><a className="menu-option">Next</a></li>
                                </ul>
                            )
                        }
                    </li>

                    <li className="mx-auto">
                        <a className="nav-item font-light"> 
                            WALL MURALS
                        </a>
                    </li>

                    <li className="mx-auto" onMouseLeave={toggleWallArtDropdown}>
                        <a 
                            onMouseOver={toggleWallArtDropdown} 
                            className="nav-item font-light"
                        > 
                            WALL ART
                            <i className="arrow-down"></i>
                        </a>
                        {
                            showWallArtDropdown && (
                                <ul className="bg-white">
                                    <li><a className="menu-option">Black</a></li>
                                    <li><a className="menu-option">Blue</a></li>
                                    <li><a className="menu-option">Brown</a></li>
                                    <li><a className="menu-option">Green</a></li>
                                    <li><a className="menu-option">Grey</a></li>
                                </ul>
                            )
                        }
                    </li>

                    <li className="mx-auto">
                        <a className="nav-item font-light"> 
                            SALE
                        </a>
                    </li>

                </ul>
            </nav>
    );
}

export default Menu;