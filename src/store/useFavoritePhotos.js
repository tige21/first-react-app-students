import { create } from 'zustand'

export const useFavoritePhotos = create((set) => ({
  favoritesPhotos: [],
  addToFavotites: (photo) => set((state) => ({ favoritesPhotos: [...state.favoritesPhotos, photo] })),
//   deleteFromFavotites: () => set({ bears: 0 }),
}))
