import React from 'react'

import breakPoints from '../utils/const-breakpoints'

const CAN_USE_DOM = typeof window !== 'undefined'
const MQ = {
  MOBILE: breakPoints.mobile,
  NO_MOBILE: breakPoints.noMobile,
  DESKTOP: breakPoints.desktop,
  TABLET_P: breakPoints.tabletPortrait,
  TABLET_L: breakPoints.tabletLandscape,
  TABLET: breakPoints.tablet,
} as const

type Query = keyof typeof MQ

export const useResponsive = (query: Query | Query[]) => {
  const [isInitialRenderPassed, setIsInitialRenderPassed] = React.useState(false)
  const [isQueryMatching, setIsQueryMatching] = React.useState(isMatching(query))
  const result = isInitialRenderPassed ? isQueryMatching : undefined

  const isMatchingQuery = React.useCallback(
    (query: Query | Query[]) => {
      return isInitialRenderPassed && isMatching(query)
    },
    [isInitialRenderPassed]
  )

  const onWindowResize = React.useCallback(() => {
    setIsQueryMatching(isMatching(query))
  }, [query])

  React.useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return function cleanup() {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [isQueryMatching, onWindowResize])

  React.useEffect(() => {
    setIsInitialRenderPassed(true)
  }, [])

  return [result, isMatchingQuery] as const
}

const isMatching = (query: Query | Query[]) => {
  let array

  if (Array.isArray(query)) {
    array = query.map((item) => CAN_USE_DOM && !!window.matchMedia(MQ[item]).matches)
    return array.some((o) => o)
  }

  return CAN_USE_DOM && !!window.matchMedia(MQ[query]).matches
}
