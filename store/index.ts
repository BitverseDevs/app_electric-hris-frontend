import { create } from 'zustand'

interface ScreenSize {
    width: number
    height: number
}
export const useStore = create((set) => ({

    // STATE
    showSideBar: true,
    screenSize: {
        width: 0,
        height: 0
    },

    // FUNCTIONS
    setShowSideBar: (val:boolean) => set((state:any) => ({ showSideBar: val })),
    setScreenSize: (screen:ScreenSize) => set((state:any) => (
        { 
            screenSize: {
                width: screen.width,
                height: screen.height
            } 
        }
    )),
}))