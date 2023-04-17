import React, {useState} from "react";
import { XIcon } from "@heroicons/react/outline";

const TopHeader = () => {

    const [isClosed, setIsClosed] = useState(false);

    const handleClose = () => {
        setIsClosed(true);
    };

    return (
        <>
         {!isClosed && (
            <div className="w-full flex items-center justify-center p-2 relative bg-citrus">
                <p className="text-sm font-medium text-light-black">
                    Get 10% Off Your{' '}
                    <a href="https://www.wallpaper-it.com/pg/terms_conditions_wpit/" target="_self">
                        <span className="tracking-tight">First Order* </span>
                    </a>{' '}
                    With HELLO10
                 </p>
                
                <button className="absolute top-0 right-3 p-2" onClick={handleClose}>
                    <XIcon  className="w-5 h-5" />
                </button>
            </div>
        )}
    </>
    );

  };

export default TopHeader;