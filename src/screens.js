
import { css } from 'styled-components';

const sizes = {
nextHubMax: 1280,
iPadPro: 1024,
surfacePro: 912,
iPadAir: 820,
iPadMini: 770,
surfaceDuo: 540,
iPhone14ProMax: 430,
Pixel7: 412,
iPhone12Pro: 395,
samsungGalaxyS8: 360,
iPhone5: 320,
galaxyFold: 280
}
// const sizes = {
//   xlargeScreen: 1440,
//   miniLargeScreen: 1300,
//   largeScreen: 1200,
//   customScreen: 1130,
//   midScreen: 1100,
//   pad: 1024,
//   pc: 1000,
//   mediumpc: 932,
//   smallpc: 900,
//   ipadAir: 820,
//   tablet: 768,
//   custom: 767,
//   miniTablet: 600,
//   surfaceDuo: 540,
//   largePhone: 480,
//   mediumPhone: 450,
//   iphone: 414,
//   iphone12: 393,
//   phone: 376,
//   samsungGalaxy: 360,
//   smallPhone: 330,
//   galaxyFold: 280
// };

// iterate through the sizes and create a media template
export const screen = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default screen;

