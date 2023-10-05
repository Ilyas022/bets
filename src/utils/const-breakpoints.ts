// const mediaMobileSmallMax = 350
const mediaMobileMax = 767
const mediaTabletMin = 768
const mediaTabletMax = 1024
const mediaDesktopMin = mediaTabletMax + 1
// const mediaDesktopHdMin = 1920
// const mediaDesktopSmallMax = 1300

const mediaMobile = `(max-width: ${mediaMobileMax}px)`
// const mediaMobileSmall = `(max-width: ${mediaMobileSmallMax}px)`
// const mediaMobileLandscape = `(max-width: ${mediaMobileMax}px) and (orientation: landscape)`
// const mediaMobilePortrait = `(max-width: ${mediaMobileMax}px) and (orientation: portrait)`

const mediaTablet = `(min-width: ${mediaTabletMin}px) and (max-width: ${mediaTabletMax}px)`
const mediaTabletLandscape = `(min-width: ${mediaTabletMin}px) and (max-width: ${mediaTabletMax}px) and (orientation: landscape)`
const mediaTabletPortrait = `(min-width: ${mediaTabletMin}px) and (max-width: ${mediaTabletMax}px) and (orientation: portrait)`

const mediaDesktop = `(min-width: ${mediaDesktopMin}px)`
// const mediaDesktopHd = `(min-width: ${mediaDesktopHdMin}px)`
// const mediaSmallDesktop = `(min-width: ${mediaDesktopMin}px) and (max-width: {${mediaDesktopSmallMax}}px)`

const mediaNonMobile = `(min-width: ${mediaMobileMax}px)`
// const mediaNonDesktop = `(max-width: ${mediaTabletMax}px)`

export default {
  mobile: mediaMobile,
  noMobile: mediaNonMobile,
  tabletLandscape: mediaTabletLandscape,
  tabletPortrait: mediaTabletPortrait,
  desktop: mediaDesktop,
  tablet: mediaTablet,
}
