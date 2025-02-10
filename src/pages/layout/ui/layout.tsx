import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets/header'

import styles from './layout.module.scss'
import { Menu } from '@/widgets/menu'

export const Layout = () => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.contentContainer}>
				<aside>
					<Menu />
				</aside>
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
