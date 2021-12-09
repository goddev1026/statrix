module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        ssm: "12px",
        sm: "16px",
        smc: "20px",
        smm: "24px",
        smt: "30px",
        lm: "36px",
        mm: "60px",
        row: "20px",
      },
      textColor: {
        ic: "#0B7ACD",
        hc: "#212121",
        ric: "#0B7ACD",
        is: "#FF9500",
        isc: "#919191",
        rtc: "#FCA70D",
        ff: "#919191",
      },
      backgroundColor: {
        ib: "#0B7ACD",
        iab: "#97CBF1",
        rbc: "#69B353",
        spg: "#69B353",
      },
      backgroundImage: {
        sbg: "url(assets/image/public/Analytics/serviceback.png)",
        bg: "url('assets/image/public/Analytics/Big BG.png')",
      },
      boxShadow: {
        sImg: "#1B52A6 -18px 18px 0px 1px",
      },
      borderColor: (theme) => ({
        cnb: "#0B7ACD",
        isb: "#1c1034",
        ls: "#CCCCCC",
        bt: "#0B7ACD",
      }),
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        100: "100px",
        10: "10px",
      },
      fontSize: {
        icf: "20px",
        it: "18px",
        il: "16px",
        28: "28px",
        icp: "20px",
        hf: "15px",
        cp: "30px",
      },
      gradientColorStops: (theme) => ({
        "gp-100": "#3F7BDA",
        "gp-200": "#764AE9",
        "y-100": "#FF754A",
        "y-200": "#FFB421",
      }),
      width: {
        ib: "280px",
        ir: "1200px",
        wsp: "680px",
        rcw: "285px",
        rci: "60px",
        hwi: "80px",
        83: "83px",
        308: "308px",
        285: "285px",
        ico: "5px",
        mark: "50px",
        sb: "310px",
        smb: "400px",
      },
      inset: {
        mw: "-13px",
        ms: "-13px",
        lb: "-32px",
        sub: "-350px",
        psub: "80%",
      },
      height: {
        rci: "60px",
        30: "30px",
        50: "50px",
        header: "100px",
        mah: "16px",
        mark: "50px",
      },
      maxWidth: {
        ir: "1200px",
        xl: { max: "1279px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
        rcw: "285px",
        rscw: "243px",
        gsi: "260px",
        gsli: "138px",
        gsc: "288px",
        gslc: "196px",
        hwc: "387px",
        1400: "1400px",
        793: "793px",
        het: "480px",
        test: "240px",
      },
      minWidth: {
        285: "285px",
      },
      maxHeight: {
        gsi: "184px",
        gsli: "96px",
      },
      minHeight: {
        header: "100px",
        ms: "670px",
      },
      padding: {
        vp: "3px 8px 3px 8px",
        ip: "6px 23px 6px 23px",
        is: "14px 24px 14px 24px",
        cp: "8px 19px 8px 19px",
        78: "78px",
        pr: "18px 20px 26px 20px",
        hb: "10px 35px 10px 35px",
        sbp: "14px 29px 14px 29px",
      },
      margin: {
        hwa1: "26%",
        hwa1l: "21%",
        hwa1m: "16%",
        hwa2: "60%",
        hwa2l: "53%",
        hwa3: "48%",
        hwa4: "410px",
        hwa5: "430px",
        hwa1lm: "56%",
        p5: "5%",
        1100: "1100px",
        32: "32px",
        vsm: "5px",
        ssm: "12px",
        sm: "16px",
        smc: "20px",
        smm: "24px",
        smt: "30px",
        lm: "36px",
        lmm: "40px",
        mm: "60px",
        sg: "100px",
        row: "20px",
        180: "180px",
      },
      paddingTop: {
        rspt: "13.42px",
      },
      lineHeight: {
        rsl: "120%",
        rcl: "130%",
      },
      letterSpacing: {
        hwt: "0.001em",
      },
      spacing: {
        44: "35px",
        75: "75px",
      },
      gap: {
        hwc: "60px",
      },
      screens: {
        ei: {
          max: "1320px",
        },
        mi: {
          max: "480px",
        },
        xlm: {
          max: "1279px",
        },
        xlsm: {
          max: "1220px",
        },
        lgm: {
          max: "1024px",
        },
        lgsm: {
          max: "928px",
        },
        lmm: {
          max: "834px",
        },
        mdm: {
          max: "768px",
        },
        smm: {
          max: "640px",
        },
        vsm: {
          max: "324px",
        },
        inadmo: {
          max: "540px",
        },
        fin: {
          max: "580px",
        },
        inad: {
          max: "800px",
        },
        cap: {
          max: "1000px",
        },
        hb: {
          max: "1220px",
        },
        mr: {
          max: "1310px",
        },
        fb: {
          max: "1030px",
        },
        mbe: {
          max: "450px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
