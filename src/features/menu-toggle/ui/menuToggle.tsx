import { useState } from 'react'
import { MenuButton } from '@/entities/menu'

export const MenuToggle = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return <MenuButton onClick={toggleMenu} />
}
