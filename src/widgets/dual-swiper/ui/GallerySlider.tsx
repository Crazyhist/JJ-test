import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

import styles from './GallerySlider.module.scss'
import { GalleryNavigation } from './GalleryNavigation'

export const GallerySlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: { perView: 1, spacing: 10 },
		slideChanged(s) {
			setCurrentSlide(s.track.details.rel)
		},
	})

	return (
		<div className={styles.container}>
			<GalleryNavigation
				currentSlide={currentSlide}
				onPrev={() => instanceRef.current?.prev()}
				onNext={() => instanceRef.current?.next()}
				totalSlides={instanceRef.current?.track.details.slides.length || 1}
			/>

			<div ref={sliderRef} className='keen-slider'>
				<div className='keen-slider__slide'>
					<img src='/images/slide1.jpg' alt='Slide 1' />
				</div>
				<div className='keen-slider__slide'>
					<img src='/images/slide2.jpg' alt='Slide 2' />
				</div>
				<div className='keen-slider__slide'>
					<img src='/images/slide3.jpg' alt='Slide 3' />
				</div>
			</div>
		</div>
	)
}
