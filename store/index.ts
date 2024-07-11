import { create } from 'zustand'

interface ScreenSize {
    width: number
    height: number
}
export const useStore = create((set) => ({

    // STATE
    showSideBar: false,
    screenSize: {
        width: 0,
        height: 0
    },

    // FUNCTIONS
    setShowSideBar: (val:boolean) => set((state:any) => (
        { 
            ...state,
            showSideBar: val 
        })),
    setScreenSize: (screen:ScreenSize) => set((state:any) => (
        { 
            ...state,
            screenSize: {
                width: screen.width,
                height: screen.height
            } 
        }
    )),
    modal: {
        setModal: (name:string, isOpen:boolean) => set((state:any) => (
            { 
                ...state,
                modal:{
                    ...state.modal,
                    [name]: isOpen
                }
            }
        ))
    }
}))