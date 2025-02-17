import React from 'react'
import styles from './InfoCards.module.scss'

interface CardData {
	id: number
	title: string
	description: string
	buttonText: string
	bgColor: string
	icon?: React.ReactNode
}

const cards: CardData[] = [
	{
		id: 1,
		title: '26 парков',
		description: 'Посмотреть адреса',
		buttonText: 'Во всех парках',
		bgColor: '#ff66b2',
	},
	{
		id: 2,
		title: '800+ аттракционов',
		description: 'Во всех парках',
		buttonText: 'Подробнее',
		bgColor: '#3fc4e9',
	},
	{
		id: 3,
		title: '200+ банкетных комнат',
		description: 'Во всех парках',
		buttonText: 'Подробнее',
		bgColor: '#f56c45',
	},
]

export const InfoCards = () => {
	return (
		<div className={styles.infoCards}>
			{cards.map((card) => (
				<div
					key={card.id}
					className={styles.card}
					style={{ backgroundColor: card.bgColor }}
				>
					<div className={styles.iconWrapper}>{card.icon}</div>
					<h3 className={styles.title}>{card.title}</h3>
					<p className={styles.description}>{card.description}</p>
					<button className={styles.button}>{card.buttonText}</button>
				</div>
			))}
		</div>
	)
}
