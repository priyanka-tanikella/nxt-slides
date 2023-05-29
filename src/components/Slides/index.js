import './index.css'
import SlideItem from '../SlideItem'

const Slides = props => {
  const {initialSlidesList, onSlideClick, activeSlide} = props

  return (
    <>
      <ol>
        {initialSlidesList.map((each, index) => (
          <SlideItem
            slide={each}
            key={each.id}
            onSlideClick={onSlideClick}
            serialNumber={index + 1}
            isActive={each.id === activeSlide.id}
          />
        ))}
      </ol>
    </>
  )
}

export default Slides
