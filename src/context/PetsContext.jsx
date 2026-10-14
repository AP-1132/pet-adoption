import {createContext, useContext, useReducer, useMemo} from 'react'
import {pets} from '../pets.js'

const PetsContext = createContext(null);

// function petsReducer(state, action) {
//   switch (action.type) {
//     case 'ADD': {
//         const existing = state.find((i) => i.id === action.pet.id);
//         if (existing) {
//             return state.map((i) => (i.id === action.pet.id ? {...i, qty: i.qty + 1} : i)
//             )
//         }
//         return [...state, action.pet];
//     }
//     case 'REMOVE': {
//         return state.filter((i) => i.id !== action.pet.id);
//         }
//     }
// }

export function PetsProvider({children}) {
    const getPets = (id) => {
        return pets.find((pet) => pet.id === id);
    };

    return <PetsContext.Provider value={{pets, getPets}}>{children}</PetsContext.Provider>
}

export function usePets() {
    const ctx = useContext(PetsContext);
    if(ctx === null) {
        throw new Error('usePets must be used within a PetsProvider');
    }
    return ctx;
}