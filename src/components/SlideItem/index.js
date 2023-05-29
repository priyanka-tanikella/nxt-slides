import './index.css'
import SlideContext from '../../Context'

const SlideItem = props => {
  const {slideDetails, serialNumber} = props

  const {heading, description} = slideDetails

  return (
    <SlideContext.Consumer>
      {value => {
        const {changeActiveTab, activeIndex} = value

        const slideClick = () => {
          changeActiveTab(serialNumber - 1)
        }

        const isActive = activeIndex === serialNumber - 1

        const slideItemClassName = isActive ? 'active-slide-item' : 'slide-item'

        return (
          <div className="slide-container">
            {' '}
            <p className="serial-number"> {serialNumber}</p>{' '}
            <li
              testid={`slideTab${serialNumber}`}
              className={slideItemClassName}
              onClick={slideClick}
            >
              {' '}
              <h1 className="slide-heading"> {heading}</h1>{' '}
              <p className="slide-para"> {description}</p>{' '}
            </li>{' '}
          </div>
        )
      }}
    </SlideContext.Consumer>
  )
}

export default SlideItem
