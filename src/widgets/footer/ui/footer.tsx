import {
	ArrowUpIcon,
	JjsocialIcon,
	LogoJJIcon,
	TelegramIcon,
	VkIcon,
} from '@/shared/assets/icons'
import { Button } from '@/shared/ui/button'

import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.footerContent}>
				<div className={styles.left}>
					<LogoJJIcon />
					<div className={styles.contacts}>
						<p className={styles.phone}>+7 (495) 181 88 77</p>
						<p className={styles.city}>(МОСКВА, ТВЕРЬ)</p>
						<p className={styles.phone}>+7 (812) 635 22 77</p>
						<p className={styles.city}>(САНКТ-ПЕТЕРБУРГ)</p>
					</div>
				</div>

				<div className={styles.center}>
					<VkIcon />
					<TelegramIcon />
					<JjsocialIcon />
				</div>

				<div className={styles.right}>
					<p>Joki Joya © 2023</p>
					<p>joki-joya.ru</p>
				</div>

				<Button variant='outlined' className={styles.upButton}>
					<span>НАВЕРХ</span> <ArrowUpIcon />
				</Button>
			</div>
		</div>
	)
}
