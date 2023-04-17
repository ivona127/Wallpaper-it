import React from "react";

const PromoBar = () => {
    return (
        <div className="flex justify-between cursor-pointer bg-white-smoke p-2 mt-16 mb-5">
            <div className="mx-auto hover:underline hover:decoration-cerulean">
                <a href="https://www.wallpaper-it.com/pg/delivery_wpit/">
                    <span className=" font-semibold ">Free Delivery </span>
                    On All Orders Over £50
                </a>
            </div>

            <div className="mx-auto font-semibold hover:underline hover:decoration-cerulean">
                <a href="https://ratings.bazaarvoice.com/index.html?merchant=wallpaperit&locale=en_GB"> Customers Rate Us 4.7 / 5</a>
            </div>

            <div className="mx-auto hover:underline hover:decoration-cerulean">
                <a href="https://www.wallpaper-it.com/pg/delivery_wpit/">
                    <span className="font-semibold"> Free and Easy </span> 
                    Returns*
                </a>
            </div>
        </div>
    );
}

export default PromoBar;