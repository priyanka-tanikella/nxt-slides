import './index.css'
import SlideItem from '../SlideItem'
import SlideContext from '../../Context'

const Slides = () => (
  <SlideContext.Consumer>
    {value => {
      const {slidesList} = value

      return (
        <>
          <ol>
            {slidesList.map((each, index) => (
              <SlideItem
                slideDetails={each}
                key={each.id}
                serialNumber={index + 1}
              />
            ))}
          </ol>
        </>
      )
    }}
  </SlideContext.Consumer>
)

export default Slides
