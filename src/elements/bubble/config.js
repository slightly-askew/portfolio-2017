
/*------------------------------------*\
  DEFAULT CONFIG

  Anything you change here will affect
  all bubbles globally.
  If you plan to use different bubble
  types accross your aplication, it
  may be prudent to pass a 'bubbleConfig'
  prop object; declaring settings
  above on a per-component basis, which
  are then merged with defaults on
  component render.
\*------------------------------------*/

const defaultConfig = {
  viewBox: '0 0 178 78',
  d: "M25,23 C11.745166,23 1,33.745166 1,47 L1,52.9978729 C1,66.2527069 11.745166,76.9978729 25,76.9978729 L153,76.9978729 C166.254834,76.9978729 177,66.2527069 177,52.9978729 L177,47 C177,33.9832734 166.92557,23.3765036 154,23 C147.388075,22.9896454 142.674242,16.5410461 140,3 C139.848994,2.23537758 138.757346,1.18405754 138,1 C136.926673,0.73914976 135.26085,1.92667298 135,3 C131.695384,16.5975878 127.850706,23 122,23 L25,23 Z",
  characterWidth: 10, //future - check Dom node for length of text
  minTextWidth: 72,
  textHeight: 36, // future - check DOM node for height of text.
  textMargin: 9,
  textColumns: 1,
  //size: `1em`, // defaults 1; gets interpolated into the root styled-component (although beware current sizing.)
  svgDimensions: { //viewboxDimensions - do not change unless different path svg is used.
    x: 180,
    y: 54
  },
  speachDirection: 'top-right',
  maskOrigin: {
    x: 144,
    y: 0
  },
  thresholds: {
    x: 36,
    y: 35
  },
  dividerWidth: 2,
  textboxOrigin: {
    x: 36,
    y: 36
  }
}

export default defaultConfig;
