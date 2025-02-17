import styles from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	variant?: 'outlined' | 'pink' | 'green' | 'black'
	className?: string
}

export const Button = ({
	children,
	onClick,
	variant = 'outlined',
	className = '',
}: ButtonProps) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
