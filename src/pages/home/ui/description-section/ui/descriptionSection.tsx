import {
	ButtonArrowIcon,
	FlowerIcon,
	StarIcon123,
	TearDropIcon,
} from '@/shared/assets/icons'
import { Button } from '@/shared/ui/button'
import styles from './descriptionSection.module.scss'

export const DescriptionSection = () => {
	return (
		<section className={styles.container}>
			<div className={styles.sectionLabel}>
				<div></div>
				<TearDropIcon />
				<span>JJ SHOW</span>
				<TearDropIcon />
				<span>CELEBRATE</span>
				<TearDropIcon />
				<span>BIRTHDAY</span>
				<TearDropIcon />
				<span>QUESTS</span>
			</div>
			<div className={styles.about}>
				<div className={styles.main}>
					<div className={styles.left}>
						<h3 className={styles.title}>НАШИ ПАРКИ:</h3>
						<StarIcon123 />
					</div>
					<div className={styles.center}>
						<h2 className={styles.heading}>
							<strong>Первый парк развлечений Joki Joya</strong>
						</h2>
						<p>
							открылся в августе 2014 года в Санкт-Петербурге. Сегодня бренд
							Joki Joya является лидером индустрии детских развлечений в России
							и состоит из 28 парков в 3 городах: 17 в Москве и Московской
							области, 10 в Санкт-Петербурге и 1 в Твери.
						</p>
						<p>
							{' '}
							На территории каждого парка размещено более 30 аттракционов
							в игровой зоне, семейный ресторан с детским и взрослым меню,
							индивидуальные банкетные комнаты для проведения праздников.
						</p>
					</div>

					<div className={styles.right}>
						<p>
							Площадь парков от 2000 до 6000 квадратных метров в зависимости
							от ТРЦ.
						</p>
						<p>
							Площадь парков от 2000 до 6000 квадратных метров в зависимости
							от ТРЦ. Также Joki Joya занимается организацией праздников
							«под ключ»: детские дни рождения, выпускные детского сада
							или школы, Новый Год, корпоративные праздники.
						</p>
						<Button variant='black' className={styles.button}>
							<span>ПОСМОТРЕТЬ АДРЕСА</span>
							<ButtonArrowIcon />
						</Button>
					</div>
				</div>
				<div className={styles.main}>
					<div className={styles.left}>
						<h3 className={styles.title}>ПРАЗДНИКИ У НАС:</h3>
						<FlowerIcon />
					</div>
					<div className={styles.center}>
						<p>
							Праздник можно отметить в индивидуальной банкетной комнате,
							расписанной профессиональными художниками вручную под тематику
							популярных фильмов или мультфильмов, либо в семейном ресторане.
						</p>
						<p>
							Что мы имеем в виду, когда говорим про организацию праздников «под
							ключ»? За каждым праздником мы закрепляем личного банкетного
							менеджера, который будет курировать ваш праздник.
						</p>
					</div>

					<div className={styles.right}>
						<p>
							В нашей базе более 300 аниматоров, шоу-программ и квестов, которые
							помогут создать особую атмосферу праздника. Украсят ваш праздник
							профессиональные аквагримеры, лучшие торты на заказ, а также
							фото — и видеосъемка.
						</p>
						<p>
							<strong>Joki Joya</strong> - это целая история про детей
							и их родителей. История, которая помогает семьям объединяться,
							окунаться с головой в детство и проводить время вместе, забывая
							о повседневной суёте.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
