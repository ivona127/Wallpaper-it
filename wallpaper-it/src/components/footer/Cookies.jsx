import React, { useState } from "react";

const Cookie = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white z-20">
      {!isAccepted && (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-6 py-6">
          <p className="text-xs font-normal">
            This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.
          </p>
          <button class="font-light bg-citrus hover:bg-light-green uppercase py-3 px-12 rounded-full" onClick={handleAccept}> Accept Cookies</button>
        </div>
      )}
    </div>
  );
};

export default Cookie;