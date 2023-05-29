import {Component} from 'react'
import './index.css'
import SlideContext from '../../Context'

class ActiveSlide extends Component {
  state = {
    changeInputHeading: false,
    changeInputPara: false,
  }

  onClickHeading = () => {
    this.setState(prevState => ({
      changeInputHeading: !prevState.changeInputHeading,
    }))
  }

  onClickPara = () => {
    this.setState(prevState => ({
      changeInputPara: !prevState.changeInputPara,
    }))
  }

  render() {
    const {changeInputHeading, changeInputPara} = this.state

    return (
      <SlideContext.Consumer>
        {value => {
          const {
            activeIndex,
            slidesList,
            changeHeading,
            changeDescription,
          } = value

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({changeInputPara: false})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({changeInputHeading: false})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangePara = event => {
            changeDescription(event.target.value)
          }

          const tabDetails = slidesList[activeIndex]
          const {heading, description} = tabDetails

          return (
            <div className="active-slide">
              {changeInputHeading ? (
                <input
                  type="text"
                  onChange={onChangeHeading}
                  onBlur={onBlurHeading}
                  value={heading}
                  className="slide-heading-input"
                />
              ) : (
                <h1
                  className="active-slide-heading"
                  onClick={this.onClickHeading}
                >
                  {heading}
                </h1>
              )}
              {changeInputPara ? (
                <input
                  type="text"
                  onBlur={onBlurDescription}
                  onChange={onChangePara}
                  value={description}
                  className="slide-description-input"
                />
              ) : (
                <p className="active-slide-para" onClick={this.onClickPara}>
                  {description}
                </p>
              )}
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}
export default ActiveSlide
