import React, { useCallback } from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../EmblaCarouselArrowButtons'
import fade from "embla-carousel-fade"
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import cab1 from '../../assets/car1aboutus.jpg';
import cab2 from '../../assets/car2aboutus.jpg';
import cab3 from '../../assets/car3aboutus.jpg';
import cab4 from '../../assets/car4aboutus.jpg';
import cab5 from '../../assets/car5aboutus.jpg';
import cab6 from '../../assets/car6aboutus.jpg';
import './index.css'

const EmblaCarousel = (props) => {
  const {  options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 }),fade()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.stop
        : autoplay.reset

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
         
            <div className="embla__slide" >
              <div className="embla__slide__number">
                <img className="slides-images" src={cab1} alt="slides"/>
              </div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__number"><img className="slides-images" src={cab2} alt="slides"/></div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__number"><img className="slides-images" src={cab3} alt="slides"/></div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__number"><img className="slides-images" src={cab4} alt="slides"/></div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__number"><img className="slides-images" src={cab5} alt="slides"/></div>
            </div>
            <div className="embla__slide" >
              <div className="embla__slide__number"><img className="slides-images" src={cab6} alt="slides"/></div>
            </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
