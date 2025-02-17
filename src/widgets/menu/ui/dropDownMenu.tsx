import styles from './DropDownMenu.module.scss'

interface BigMenuProps {
	isOpen: boolean
	onClose: () => void
}

export const DropDownMenu = ({ isOpen = false, onClose }: BigMenuProps) => {
	return (
		<div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
			<div className={styles.leftPart}>
				<h2>Парки</h2>
				<ul>
					<li>Карта парков</li>
					<li>Новости</li>
				</ul>

				<h2>Праздники</h2>
				<ul>
					<li>Корпоративные билеты</li>
				</ul>

				<h2>Рестораны</h2>
				<ul>
					<li>Family Villa</li>
					<li>J Menu & Обед</li>
				</ul>

				<h2>Афиша</h2>
				<ul>
					<li>Мероприятия в этом месяце</li>
				</ul>
			</div>

			<div className={styles.rightPart}>
				<ul>
					<li>Главная</li>
					<li>О нас</li>
					<div onClick={onClose} className={styles.closeBtn}>
						Закрыть
					</div>
					<li>Меню</li>
					<li>Family Villa</li>
					<li>Купить билеты</li>
					<li>Контакты</li>
				</ul>
			</div>
		</div>
	)
}
