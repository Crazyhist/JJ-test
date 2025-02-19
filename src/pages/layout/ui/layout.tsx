import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets/header'

import { Footer } from '@/widgets/footer'
import { DropDownMenu } from '@/widgets/menu'
import { Sidebar } from '@/widgets/sidebar'
import styles from './layout.module.scss'

export const Layout = () => {
	return (
		<div className={styles.container}>
			<Header />
			<DropDownMenu />
			<div className={styles.contentContainer}>
				<aside>
					<Sidebar />
				</aside>
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	)
}
