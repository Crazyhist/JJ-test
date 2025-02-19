import { useState, useEffect } from 'react'
import { useMenuStore } from '@/features/menu-toggle/model/menuSlice'
import styles from './dropDownMenu.module.scss'
import { MenuArrowIcon } from '@/shared/assets/icons'

const categories = [
	{ title: 'Парки', items: ['Карта парков', 'О нас'] },
	{ title: 'Праздники', items: ['Корпоративные билеты'] },
	{ title: 'Рестораны', items: ['Family Villa', 'J Menu & Обед'] },
	{ title: 'Афиша', items: ['Мероприятия в этом месяце'] },
	{ title: 'Контакты', items: [] },
]

export const DropDownMenu = () => {
	const { isOpen } = useMenuStore()
	const [openCategory, setOpenCategory] = useState<string | null>(null)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 800)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 800)
			if (window.innerWidth > 800) {
				setOpenCategory(null)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const toggleCategory = (category: string) => {
		setOpenCategory(openCategory === category ? null : category)
	}

	if (!isOpen) return null

	return (
		<div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
			<div className={styles.leftPart}>
				{categories.map(({ title, items }) => (
					<div key={title} className={styles.category}>
						<div
							className={styles.categoryHeader}
							onClick={() => isMobile && toggleCategory(title)}
						>
							<h2>{title}</h2>
							{isMobile && items.length > 0 && (
								<span className={styles.toggleIcon}>
									{openCategory === title ? (
										<MenuArrowIcon />
									) : (
										<MenuArrowIcon />
									)}
								</span>
							)}
						</div>
						{(openCategory === title || !isMobile) && (
							<ul className={styles.submenu}>
								{items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>

			<div className={styles.rightPart}>
				<ul>
					<li>Главная</li>
					<li>О нас</li>
					<li>Меню</li>
					<li>Family Villa</li>
					<li>Купить билеты</li>
					<li>Контакты</li>
				</ul>
			</div>
		</div>
	)
}
