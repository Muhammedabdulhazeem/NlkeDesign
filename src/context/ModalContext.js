import { createContext, useReducer } from 'react';

export const ModalContext = createContext()

const modalReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        case 'SHOW_MODAL':
            return {...state, modal: action.payload}
        default:
            return state
    }
}

export function ModalProvider({ children }) {
    const [state, dispatch] = useReducer(modalReducer, {
        modal: {
            bool: false,
            src: ''
        }
    })

    const showModal = (objct) => {
        dispatch({ type: 'SHOW_MODAL', payload: objct })
    }


    return (
        <ModalContext.Provider value={{...state, showModal }}>
            {children}
        </ModalContext.Provider>
    )
}