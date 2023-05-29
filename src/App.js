import {v4 as uuid} from 'uuid'
import {Component} from 'react'
import './App.css'
import Header from './components/Header'
import Slides from './components/Slides'
import ActiveSlide from './components/ActiveSlide'
import SlideContext from './Context'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

// Replace your code here
class App extends Component {
  state = {
    slidesList: initialSlidesList,
    activeIndex: 0,
  }

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {slidesList} = prevState
      const newList = slidesList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, heading: value}
        }
        return eachItem
      })
      return {slidesList: newList}
    })
  }

  changeDescription = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {slidesList} = prevState
      const newList = slidesList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, description: value}
        }
        return eachItem
      })
      return {slidesList: newList}
    })
  }

  changeActiveTab = index => {
    this.setState({activeIndex: index})
  }

  onClickNew = () => {
    const {activeIndex} = this.state
    const newItem = {
      id: uuid(),
      heading: 'Heading',
      description: 'Description',
    }
    this.setState(prevState => {
      const {slidesList} = prevState
      const newList = insert(slidesList, activeIndex + 1, newItem)
      return {slidesList: [...newList]}
    }, this.changeActiveTab(activeIndex + 1))
  }

  render() {
    const {slidesList, activeIndex} = this.state

    return (
      <>
        <Header />
        <button type="button" className="new-button" onClick={this.onClickNew}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus-image"
          />
          <p className="new-para">New</p>
        </button>
        <SlideContext.Provider
          value={{
            slidesList,
            activeIndex,
            changeActiveTab: this.changeActiveTab,
            changeHeading: this.changeHeading,
            changeDescription: this.changeDescription,
            onClickNew: this.onClickNew,
          }}
        >
          <>
            <div className="slides">
              <Slides />
              <ActiveSlide />
            </div>
          </>
        </SlideContext.Provider>
      </>
    )
  }
}
export default App
