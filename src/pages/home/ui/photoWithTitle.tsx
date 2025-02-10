import { StarIcon } from '@/shared/assets/icons'

import styles from './PhotoWithTitle.module.scss'

import mainPhoto from '@/shared/assets/images/main-photo.png'

export const PhotoWithTitle = () => {
	return (
		<div className={styles.container}>
			<img src={mainPhoto} className={styles.image} />
			<div className={styles.textContainer}>
				<h1 className={styles.title}>
					<span className={styles.highlight}>O</span> JOKI JOYA
				</h1>
				<span className={styles.stars}>
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</span>
			</div>
		</div>
	)
}
