import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AttributeList = () => {
    const [products, setProducts] = useState([]);
    const [numProducts, setNumProducts] = useState(0);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        fetch(
            "https://tues-store.dev.uxperience.eu/wp-json/wc/v3/products?consumer_key=ck_b9f04fe6e6c9194e1e31580b279baea4d26bc1d6&consumer_secret=cs_0f0a0925f29d0fbd6c55c71f630b50a430bcc039"
        )
        .then((response) => response.json())
        .then((data) => {
        setProducts(data);
        setNumProducts(data.length);
    })
        .catch((error) => console.log(error));
    }, []);

    const updatedProducts = products.map((product) => {
        return {
        ...product,
        average_rating: Math.floor(Math.random() * 6).toFixed(1),
        };
    });

    let sortedProducts = [...updatedProducts];

    if (sortOrder === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="mt-10">
            <div className="flex justify-between cursor-pointer mx-5">
                <p>
                <span className="font-bold">Found</span>: {numProducts} results
                </p>

                <div className="results-right flex justify-content-between">
                <ul className="flex flex-wrap justify-between grid-cols-5">
                    <li className="flex-grow mr-4">
                    <select className="custom-select">
                        <option value="">Colour</option>
                    </select>
                    </li>
                    <li className="flex-grow mr-4">
                    <select className="custom-select">
                        <option value="">Brand</option>
                    </select>
                    </li>
                    <li className="flex-grow mr-4">
                    <select className="custom-select">
                        <option value="">Design Style</option>
                    </select>
                    </li>
                    <li className="flex-grow mr-4">
                    <select
                        className="custom-select"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="">Sort</option>
                        <option value="desc">Price: High - Low</option>
                        <option value="asc">Price: Low - High</option>
                    </select>
                    </li>
                </ul>
            </div>
        </div>

        <br />
        <div className="border border-solid border-citrus mx-4"></div>
        <br />

        <div className="flex flex-wrap mb-20 ">
            {sortedProducts.map((product) => (
            <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
            >
                <img
                src={product.images[0].src}
                alt={product.name}
                className="w-full"
            />
            <h2 className="font-custom text-s mt-6 mb-4">{product.name}</h2>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, index) => (
                            <FontAwesomeIcon
                                key={index}
                                icon={index < product.average_rating ? faStar : faStar}
                                color={index < product.average_rating ? "#d7bd3f" : "#c4c4c4"}
                            /> 
                        ))}
                        <p className="text-xs ml-1">{product.average_rating}</p>
                    </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="font-semibold text-s">£{product.price}</p>
                        <p className=" text-sm underline cursor-pointer">Order sample</p>
                    </div>
                    <p className="text-xs uppercase">Per roll</p>
                </div>
            ))}
            </div>
        </div>
    );  
};

export default AttributeList;