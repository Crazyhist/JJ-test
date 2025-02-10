import styles from './menuButton.module.scss'

interface MenuButtonProps {
	onClick?: () => void
}

export const MenuButton = ({ onClick }: MenuButtonProps) => {
	return (
		<div className={styles.menuButton} onClick={onClick}>
			<div className={styles.lines}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<p>Меню</p>
		</div>
	)
}
