import {create} from 'zustand'

export const useCodeStore = create((set) => ({
  code: 'console.log("Hello")',
  setCode: (newCode) => {
    set((state) => {
      return {code: newCode}
    })
  }
}))

export const useUserStore = create((set) => ({
  user: 'Joni',
  setUser: (newUser) => {
    set(() => {
      return {user: newUser}
    })
  }
}))