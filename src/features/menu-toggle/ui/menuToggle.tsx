import { MenuButton } from '@/entities/menu'
import { useMenuStore } from '../model/menuSlice'

export const MenuToggle = () => {
	const { toggleMenu } = useMenuStore()

	return <MenuButton onClick={toggleMenu} />
}
