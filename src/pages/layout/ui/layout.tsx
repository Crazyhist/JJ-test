import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets/header'

import { Sidebar } from '@/widgets/sidebar'
import styles from './layout.module.scss'
import { DropDownMenu } from '@/widgets/menu'
import { useState } from 'react'

export const Layout = () => {
	const [isOpen, setIsOpen] = useState(true)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.container}>
			<Header />
			<DropDownMenu isOpen={isOpen} onClose={toggleMenu} />
			<div className={styles.contentContainer}>
				<aside>
					<Sidebar />
				</aside>
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
