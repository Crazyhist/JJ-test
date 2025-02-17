import { AnimatedLogo, StarIcon } from '@/shared/assets/icons'

import styles from './PhotoWithTitle.module.scss'

import mainPhoto from '@/shared/assets/images/main-photo.png'

export const PhotoWithTitle = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={mainPhoto} className={styles.image} />
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
						<StarIcon />
						<StarIcon />
						<StarIcon />
					</span>
				</div>
				<AnimatedLogo className={styles.animatedLogo} />
			</div>
		</div>
	)
}
