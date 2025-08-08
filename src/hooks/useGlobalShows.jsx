import { createContext, useContext, useReducer } from "react";

const initialState = { token: "", usernull, shows: [] }

function showsReducer(state, action) {
    switch (action.type) {
        case "READ_SHOW":

            break;

        case "UPDATE_SHOW":

            break;

        case "ADD_SHOW":
                return {
                    ...state,shows:[...state.show, action.payload]
                }

        default:
            return state;
    }
}

const ShowContext = createContext()

export function ShowsProvider({children}){
   const [store, dispatch] = useReducer(showsReducer, initialState)

   return <ShowContext.Provider value={{store, dispatch}}>
    {children}
   </ShowContext.Provider>
}

export default function useGlobalShows() {
    return useContext(ShowContext)
}