import {Component} from 'react'
import './index.css'

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
    this.setState(prevState => ({changeInputPara: !prevState.changeInputPara}))
  }

  onChangeHead = event => {
    const {onChangeInputHeading} = this.props
    onChangeInputHeading(event)
  }

  onChangePara = event => {
    const {onChangeInputPara} = this.props
    onChangeInputPara(event)
  }

  render() {
    const {headingEl, descriptionEl} = this.props

    const {changeInputHeading, changeInputPara} = this.state

    const headEl = changeInputHeading ? (
      <input
        type="text"
        onChange={this.onChangeHead}
        onBlur={this.onClickHeading}
        value={headingEl}
      />
    ) : (
      <h1 className="active-slide-heading" onClick={this.onClickHeading}>
        {headingEl}
      </h1>
    )
    const paraEl = changeInputPara ? (
      <input
        type="text"
        onBlur={this.onClickPara}
        onChange={this.onChangePara}
        value={descriptionEl}
      />
    ) : (
      <p className="active-slide-para" onClick={this.onClickPara}>
        {descriptionEl}
      </p>
    )
    return (
      <div className="active-slide">
        {headEl}
        {paraEl}
      </div>
    )
  }
}
export default ActiveSlide
