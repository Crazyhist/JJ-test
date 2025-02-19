import { GallerySlider } from '@/widgets/dual-swiper'
import { DescriptionSection } from './description-section/ui/descriptionSection'
import styles from './home-page.module.scss'
import { PhotoWithTitle } from './photo-with-title/photoWithTitle'

export const HomePage = () => {
	return (
		<div className={styles.container}>
			<PhotoWithTitle />
			<DescriptionSection />
			<GallerySlider />
		</div>
	)
}
