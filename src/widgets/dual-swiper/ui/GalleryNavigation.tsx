import styles from './GalleryNavigation.module.scss'

interface GalleryNavigationProps {
	currentSlide: number
	onPrev: () => void
	onNext: () => void
	totalSlides: number
}

export const GalleryNavigation = ({
	currentSlide,
	onPrev,
	onNext,
	totalSlides,
}: GalleryNavigationProps) => {
	return (
		<div className={styles.navContainer}>
			<h2 className={styles.title}>
				<span>ИНТЕРЬЕРЫ</span>
				<span>ПАРКОВ</span>
			</h2>

			<div className={styles.pagination}>
				<span>{String(currentSlide + 1).padStart(2, '0')}</span> /{' '}
				<span>{String(totalSlides).padStart(2, '0')}</span>
			</div>

			<div className={styles.controls}>
				<button className={styles.prev} onClick={onPrev}>
					←
				</button>
				<button className={styles.next} onClick={onNext}>
					→
				</button>
			</div>

			<div className={styles.dots}>
				{Array.from({ length: totalSlides }).map((_, idx) => (
					<span
						key={idx}
						className={`${styles.dot} ${
							idx === currentSlide ? styles.active : ''
						}`}
					/>
				))}
			</div>
		</div>
	)
}
