import { AnimatedLogo, StarIcon } from '@/shared/assets/icons'

import styles from './PhotoWithTitle.module.scss'

import mainPhoto from '@/shared/assets/images/main-photo.png'
import mainPhotoSm from '@/shared/assets/images/main-photo-sm.png'

export const PhotoWithTitle = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<picture>
					<source srcSet={mainPhotoSm} media='(max-width: 600px)' />
					<img src={mainPhoto} className={styles.image} alt='Joki Joya' />
				</picture>
			</div>

			<div className={styles.textWrapper}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						<span className={styles.highlight}>O</span>
						<div className={styles.titleText}>
							<span>JOKI JOYA</span>
							<span>JOKI JOYA</span>
						</div>
					</h1>
					<span className={styles.stars}>
						<StarIcon className={styles.star} />
						<StarIcon className={`${styles.star} ${styles.hideOnMobile}`} />
						<StarIcon className={`${styles.star} ${styles.hideOnMobile}`} />
					</span>
				</div>
				<div className={styles.animatedLogoContainer}>
					<AnimatedLogo className={styles.animatedLogo} />
				</div>
			</div>
		</div>
	)
}
