/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "custom": ["Avenir", "Helvetica", "sans-serif"],
      "dm-serif": ["DM Serif Display", "serif"]
    },

    fontSize: {
      "sm": ["17px",
        {
          letterSpacing: "1.7px",
          lineHeight: "16px",
        }
      ],

      "xs": ["14px"
      ], 

      "xxs": ["10px"
      ],
      "lg": [ "20px"     
      ],
      "xl": [ "25px"     
      ],
      "s":["18px"
    ],
      "xxl":["30px"
    ],
    "m":["22px"
    ]
    },

    colors: {
      "citrus": "#6eceb2",
      "light-black": "#1d1d1b",
      "red":"#FF0000",
      "cerulean": "#00629b",
      "white-smoke": "#f8f8f8",
      "white": "#fff",
      "pantone": "#212322",
      "light-green": "#bee9dc"    
    },

    backgroundImage: {
      "sprite": "url(../src/assets/wallpaperit_sprite.png)"
    },

    backgroundPosition: {
      "signinIcon": "-105px -50px",
      "wishlistIcon": "-6px -55px",
      "bagIcon": "0px -102px",
      "searchIcon": "-50px -55px"
    },

    backgroundSize: {
      "auto": "auto"
    },
  },
  extend: {
  },
  plugins: [],
}