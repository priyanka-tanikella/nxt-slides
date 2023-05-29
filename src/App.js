import {v4 as uuid} from 'uuid'
import {Component} from 'react'
import './App.css'
import Header from './components/Header'
import Slides from './components/Slides'
import ActiveSlide from './components/ActiveSlide'

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

// Replace your code here
class App extends Component {
  state = {
    slidesList: initialSlidesList,
    activeSlide: initialSlidesList[0],
    headingEl: initialSlidesList[0].heading,
    descriptionEl: initialSlidesList[0].description,
  }

  onNewClick = () => {
    const newItem = {
      id: uuid(),
      heading: 'Heading',
      description: 'Description',
    }
    const {slidesList, activeSlide} = this.state
    const indexNumber = slidesList.indexOf(activeSlide)
    const lastList = slidesList.slice(indexNumber + 1)
    const firstList = slidesList.slice(0, indexNumber + 1)

    this.setState({
      slidesList: [...firstList, newItem, ...lastList],
      activeSlide: newItem,
      headingEl: newItem.heading,
      descriptionEl: newItem.description,
    })
  }

  onSlideClick = id => {
    const {slidesList} = this.state
    const filteredItem = slidesList.filter(each => each.id === id)
    this.setState({
      activeSlide: filteredItem[0],
      headingEl: filteredItem[0].heading,
      descriptionEl: filteredItem[0].description,
    })
  }

  changingHead = () => {
    const {slidesList, activeSlide, headingEl} = this.state
    const indexNumber = slidesList.indexOf(activeSlide)
    slidesList[indexNumber].heading = headingEl
    console.log(headingEl)
  }

  changingPara = () => {
    const {slidesList, activeSlide, descriptionEl} = this.state
    const indexNumber = slidesList.indexOf(activeSlide)
    slidesList[indexNumber].description = descriptionEl
  }

  onChangeInputHeading = event => {
    this.setState({headingEl: event.target.value}, this.changingHead)
  }

  onChangeInputPara = event => {
    this.setState({descriptionEl: event.target.value}, this.changingPara)
  }

  render() {
    const {slidesList, activeSlide, headingEl, descriptionEl} = this.state
    console.log(headingEl)
    return (
      <>
        <Header />
        <button type="button" className="new-button" onClick={this.onNewClick}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus-image"
          />
          <p className="new-para">New</p>
        </button>
        <div className="slides">
          <Slides
            initialSlidesList={slidesList}
            onSlideClick={this.onSlideClick}
            activeSlide={activeSlide}
          />
          <ActiveSlide
            activeSlide={activeSlide}
            headingEl={headingEl}
            descriptionEl={descriptionEl}
            onChangeInputHeading={this.onChangeInputHeading}
            onChangeInputPara={this.onChangeInputPara}
          />
        </div>
      </>
    )
  }
}
export default App
