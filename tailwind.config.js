/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      fontFamily: {
        byp: ["Broted-young-plant"],
        bypscript: ["Broted-young-plant-script"],
        qslight: ["Quiche-sans-light"],
        qsmedium: ["Quiche-sans-medium"],
        qsregular: ["Quiche-sans-regular"],
        qsthin: ["Quiche-sans-thin"],
        lato: ["Lato"],
      },
      screens: {
        tablet: "960px",
        desktop: "1280px",
        mobile: '360px',
      },
      colors: {
        primary: {
          OlderSage: "#819D6D",
          Olive: "#46553B",
          MatchaMilk: "#A7C294",
          MatchaFade: "#D0DFC6",
          SageBase: "#e8ead6"
        },
        secondary: {
          "Brl-01": "#F7E4BD",
          "Brl-02": "#E7CD94",
          "Brl-03": "#B49349",
          "Brl-04": "#5E460F",
          "Brl-05": "#9F7C2E"
        },
        neutral: {
          White: "#FFF8EE",
          Black: "#36290B",
          Grey: "#B8B2A4",
        },
        overlay: 'rgba(40,40,40,0.3)',
        MatchaMilkTrans: 'rgba(167, 194, 148, 0.90)'
      },
      fontSize: {
        'MainTitle' : ['2.25rem', {letterSpacing: '0.3rem', lineHeight: '100%'}],
        'SubTitle' : ['1.5rem'],
        'Heading1' : '20px',
        'Heading2' : ['20px', {letterSpacing: '0.04rem'}],
        'Heading3' : '20px',
        'Heading4' : ['1rem'],
        'Body' : '14px',
        'BodyLarge': '36px',
        'BodySmall' : '20px'
      },
      maxWidth: {
        'mobile-invitation': '500px',
        40: '160px',
        82: '20.5rem',
        107: '26.75rem'
      },
      spacing: {
        30: '7.5rem',
        21: '5.25rem'
      },
      boxShadow: {
        'MainTitle-outline': '0 0 0 0.5px #B49349',
        'Header4-outline': '0 0 0 0.5px #9F7C2E'
      },
      letterSpacing: {
        0.24: '0.24rem'
      },
      width: {
        19: '4.75rem',
        65: '16.25rem',
        78: '19.5rem',
        '9/10': '90%',
      },
      height: {
        19: '4.75rem',
        32.2: '32.2px'
      },
      gap: {
        9: '2.25rem'
      },
      borderRadius: {
        '4xl':'1.25rem'
      },
    },
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  plugins: [require("tailwindcss-animated"), require("taos/plugin")],
};
