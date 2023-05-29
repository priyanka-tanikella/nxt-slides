import './index.css'

const SlideItem = props => {
  const {slide, onSlideClick, serialNumber, isActive} = props

  const {id, heading, description} = slide

  const slideClick = () => {
    onSlideClick(id, heading, description)
  }

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
}

export default SlideItem
