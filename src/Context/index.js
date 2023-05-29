import React from 'react'

const SlideContext = React.createContext({
  slidesList: [],
  activeIndex: 0,
  onClickNew: () => {},
  changeActiveTab: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default SlideContext
