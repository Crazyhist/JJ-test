import { useMenuStore } from '../model/menuSlice'
import { MenuButton } from '@/entities/menu'

export const MenuToggle = () => {
	const { isOpen, toggleMenu } = useMenuStore()

	return <MenuButton onClick={toggleMenu} />
}
