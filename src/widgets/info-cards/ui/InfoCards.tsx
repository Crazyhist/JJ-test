import { ButtonArrowIcon, CornerDotIcon } from '@/shared/assets/icons'
import { Button } from '@/shared/ui/button'
import styles from './InfoCards.module.scss'

interface CardData {
	id: number
	title: string
	description: string
	buttonText: string
	bgColor: string
	image?: React.ReactNode
}

const cards: CardData[] = [
	{
		id: 1,
		title: '26',
		description: 'Посмотреть адреса',
		buttonText: 'ВО ВСЕХ ПАРКАХ',
		bgColor: '#ABEC20',
	},
	{
		id: 2,
		title: '26',
		description: 'Посмотреть адреса',
		buttonText: 'ВО ВСЕХ ПАРКАХ',
		bgColor: '#0267FF',
	},
	{
		id: 3,
		title: '26 парков',
		description: 'Посмотреть адреса',
		buttonText: 'ВО ВСЕХ ПАРКАХ',
		bgColor: '#000000',
	},
	{
		id: 4,
		title: '26',
		description: 'Посмотреть адреса',
		buttonText: 'ВО ВСЕХ ПАРКАХ',
		bgColor: '#F55E1D',
	},
	{
		id: 6,
		title: '26 парков',
		description: 'ПОСМОТРЕТЬ АДРЕСА',
		buttonText: 'ВО ВСЕХ ПАРКАХ',
		bgColor: '#ff66b2',
	},
	{
		id: 7,
		title: '26 парков',
		description: 'Посмотреть адреса',
		buttonText: 'ВО ВСЕХ ПАРКАХ',
		bgColor: '#A66EFF',
	},
	{
		id: 8,
		title: '26 парков',
		description: 'Посмотреть адреса',
		buttonText: 'ВО ВСЕХ ПАРКАХ',
		bgColor: '#ABEC20',
	},
]

export const InfoCards = () => {
	return (
		<div className={styles.infoCards}>
			{cards.map((card, index) => (
				<div
					key={card.id}
					className={styles.card}
					style={{ backgroundColor: card.bgColor }}
				>
					<CornerDotIcon className={`${styles.corner} ${styles.topLeft}`} />
					<CornerDotIcon className={`${styles.corner} ${styles.topRight}`} />
					<CornerDotIcon className={`${styles.corner} ${styles.bottomLeft}`} />
					<CornerDotIcon className={`${styles.corner} ${styles.bottomRight}`} />
					<div className={styles.textWrapper}>
						<div>
							<h3 className={styles.title}>{card.title}</h3>
							<p className={styles.description}>{card.description}</p>
						</div>
						<Button
							variant='black'
							className={`${styles.buttonCard} ${
								index === 0 || index === cards.length - 1
									? styles.blackButton
									: styles.whiteButton
							}`}
						>
							<span>{card.buttonText}</span>
							<ButtonArrowIcon />
						</Button>
					</div>
				</div>
			))}
		</div>
	)
}
