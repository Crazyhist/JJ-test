import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect } from 'react'

import styles from './DualSlider.module.scss'

export const DualSlider = () => {
	// Создаем состояния для рефов обоих слайдеров
	const [leftSliderRef, leftInstanceRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		vertical: true, // Левый вертикальный
		slides: { perView: 1, spacing: 10 },
	})

	const [rightSliderRef, rightInstanceRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: { perView: 1, spacing: 10 },
	})

	// Функции для управления слайдерами
	const nextSlide = () => {
		leftInstanceRef.current?.next()
		rightInstanceRef.current?.next()
	}

	const prevSlide = () => {
		leftInstanceRef.current?.prev()
		rightInstanceRef.current?.prev()
	}

	// Синхронизация слайдеров
	useEffect(() => {
		if (leftInstanceRef.current && rightInstanceRef.current) {
			leftInstanceRef.current.on('slideChanged', (s) => {
				rightInstanceRef.current?.moveToIdx(s.track.details.rel)
			})
			rightInstanceRef.current.on('slideChanged', (s) => {
				leftInstanceRef.current?.moveToIdx(s.track.details.rel)
			})
		}
	}, [leftInstanceRef, rightInstanceRef])

	return (
		<div className={styles.container}>
			{/* Кнопка "Назад" */}
			<button className={styles.prevButton} onClick={prevSlide}>
				←
			</button>

			{/* Левый (вертикальный) слайдер */}
			<div ref={leftSliderRef} className='keen-slider'>
				<div className='keen-slider__slide'>Slide 1</div>
				<div className='keen-slider__slide'>Slide 2</div>
				<div className='keen-slider__slide'>Slide 3</div>
			</div>

			{/* Правый (горизонтальный) слайдер */}
			<div ref={rightSliderRef} className='keen-slider'>
				<div className='keen-slider__slide'>Slide A</div>
				<div className='keen-slider__slide'>Slide B</div>
				<div className='keen-slider__slide'>Slide C</div>
			</div>

			{/* Кнопка "Вперед" */}
			<button className={styles.nextButton} onClick={nextSlide}>
				→
			</button>
		</div>
	)
}
