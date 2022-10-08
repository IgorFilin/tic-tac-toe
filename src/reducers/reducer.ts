
export type initialStateType = Array<any>
export type changeValueACType = ReturnType<typeof changeValueAC>
export type AllActionsType = changeValueACType

const initialState:initialStateType = [

]

export const Reducer = (state:initialStateType=initialState,action:AllActionsType) => {
    switch (action.type){
        default:
            return state
    }


};

export const changeValueAC = (id:number)=> {
    return {type:'CHANGE-VALUE',id} as const
}

