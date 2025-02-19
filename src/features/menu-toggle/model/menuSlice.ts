import { create } from 'zustand'

interface MenuState {
	isOpen: boolean
	toggleMenu: () => void
	closeMenu: () => void
}

// ✅ Создаем Zustand-хранилище
export const useMenuStore = create<MenuState>((set) => ({
	isOpen: false,
	toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
	closeMenu: () => set({ isOpen: false }),
}))

// ✅ Добавляем в `window` для отладки
if (typeof window !== 'undefined') {
	;(window as any).menuStore = useMenuStore
}
