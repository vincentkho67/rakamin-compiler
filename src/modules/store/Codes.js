import {create} from 'zustand'

export const useCodeStore = create((set) => ({
  code: 'console.log("Hello World")',
  setCode: (newCode) => {
    set((state) => {
      return {code: newCode}
    })
  }
}))

export const useUserStore = create((set) => ({
  user: null,
  setUser: (newUser) => {
    set(() => {
      return {user: newUser}
    })
  }
}))