import React, {useState} from "react";
import wallpaperItLogo from "../../assets/wallpaperit-Logo.png";

const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        console.log(searchTerm);
        // тук може да направите нещо със searchTerm, като например да го изпратим към API
    };

    const handleSubmit = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (searchTerm.trim() !== "") {
              handleSearch();
            }
        }
    };

    return(
        <nav className="w-full">
            <div id="navbar-search" className="flex items-center justify-between p-4 mt-4">
                <img src={wallpaperItLogo} alt="wallpaperItLogo"/>
                    <form className="w-1/3 flex justify-center items-center lg:block relative" onSubmit={handleSubmit}>
                        <input
                            type="search"
                            id="search-bar--input"
                            placeholder="Search for products..." 
                            className="w-full h-full border-2 text-xs border-citrus rounded-full appearance-none p-3 text-light-black focus:outline-none placeholder-light-black"
                            enterKeyHint="go"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            onKeyDown={handleSubmit}
                        />
                        <button className="bg-sprite bg-searchIcon w-12 h-10 mt-1 ml-2 absolute right-2" onClick={handleSearch} ></button>
                    </form>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center mx-5">
                            <button className="bg-sprite bg-signinIcon w-10 h-9 my-0"></button>
                            <span className="text-center text-xxs">Sign In</span>
                        </div>
                        <div className="flex flex-col items-center mx-5">
                            <button className="bg-sprite bg-wishlistIcon w-10 h-9 my-0"></button>
                            <span className="text-center text-xxs">Wishlist</span>
                        </div>
                        <div className="flex flex-col items-center mx-5">
                            <button className="bg-sprite bg-bagIcon w-10 h-9 my-0"></button>
                            <span className="arrow-downtext-center text-xxs">Bag</span>
                        </div>
                    </div>
            </div>
        </nav>

    );
};

export default Navbar;