import { MenuArrowIcon } from '@/shared/assets/icons'
import styles from './sidebar.module.scss'

const menuItems = [
	{ id: 1, label: 'ПАРКИ' },
	{ id: 2, label: 'ПРАЗДНИКИ' },
	{ id: 3, label: 'РЕСТОРАНЫ' },
	{ id: 4, label: 'АФИША' },
]

export const Sidebar = () => {
	return (
		<div className={styles.menuWrapper}>
			<aside className={styles.menu}>
				<nav className={styles.nav}>
					{menuItems.map((item) => (
						<div key={item.id} className={styles.menuItem}>
							<span className={styles.arrow}>
								<MenuArrowIcon />
							</span>
							<span className={styles.label}>{item.label}</span>
						</div>
					))}
				</nav>
			</aside>
		</div>
	)
}
