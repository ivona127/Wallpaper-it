import React from "react";

const Info = () => {
    return(
        <div>
            <div className="p-2">
                <ol className="flex items-center font-light">
                    <li>
                        <a className="undefined underline" aria-current="false" title="Home" href="https://www.wallpaper-it.com/">
                        Home
                        </a>
                    </li>
                    <span className="flex ml-1.5 mr-1.5">/</span>
                    <li>
                        <span aria-current="false" className="undefined underline">
                        <a className="ml-1" href="https://www.wallpaper-it.com/wallpaper/">
                            Wallpaper
                        </a>
                        </span>
                    </li>
                    <span className="flex ml-1.5 mr-1.5">/</span>
                    <li>
                        <span aria-current="false" className="undefined underline">
                        <a className="ml-1" href="https://www.wallpaper-it.com/wallpaper/shop-by-design/">
                            Shop By Design
                        </a>
                        </span>
                    </li>
                    <span className="flex ml-1.5 mr-1.5">/</span>
                    <li>
                        <span aria-current="false" className="undefined underline">
                        <a className="ml-1" href="https://www.wallpaper-it.com/wallpaper/animal/">
                            Animal
                        </a>
                        </span>
                    </li>
                </ol>
            </div>
            <div className="w-full text-center">
                <h1 className="font-bold text-xxl font-dm-serif">Animal Wallpaper</h1>
                <p className="font-semibold text-lg" style={{margin: '0 auto', maxWidth: '1150px'}}>
                When it comes to adding a dose of exotic chic to your home, you can’t go
                wrong with our animal print wallpaper. From tiny critters to magnificent
                beasts, we’ve got an impressive selection of gorgeous animal wallpaper
                to complement every room in the house – including living rooms,{" "}  
                <a className="underline" href="https://www.wallpaper-it.com/wallpaper/dining-room/">dining rooms</a>
                {" "}and even your bedroom! Available in a wide range of colourways,
                our animal print wallpaper is the perfect way to create a feature wall
                or used to decorate the entire space to make a bold statement.
                </p>

            </div>          
        </div>
    );
};

export default Info;