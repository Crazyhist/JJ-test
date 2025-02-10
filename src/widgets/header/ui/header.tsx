import { MenuToggle } from '@/features/menu-toggle'

import { LogoIcon, MapIcon, PhoneIcon } from '@/shared/assets/icons'

import { Button } from '@/shared/ui/button/button'

import styles from './header.module.scss'

export const Header = () => {
	return (
		<div className={styles.headerWrapper}>
			<header className={styles.header}>
				<div className={styles.logo}>
					<LogoIcon />
				</div>
				<div className={styles.content}>
					<div className={styles.location}>
						<Button variant='outlined'>
							<span className={styles.icon}>
								<MapIcon />
							</span>
							<span className={styles.locationText}>МОСКВА</span>
						</Button>
						<Button variant='outlined'>
							<span className={styles.icon}>
								<PhoneIcon />
							</span>
							<span className={styles.locationPhone}>+7 (812) 635 22 77</span>
						</Button>
					</div>

					<div className={styles.actions}>
						<Button variant='pink'>КУПИТЬ БИЛЕТЫ</Button>
						<Button variant='green'>ЗАКАЗАТЬ ПРАЗДНИК</Button>
					</div>
				</div>
				<MenuToggle />
			</header>
		</div>
	)
}
