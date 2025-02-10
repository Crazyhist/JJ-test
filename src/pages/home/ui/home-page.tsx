import { PhotoWithTitle } from './photoWithTitle'
import styles from './home-page.module.scss'

export const HomePage = () => {
	return (
		<div className={styles.container}>
			<PhotoWithTitle />
		</div>
	)
}
