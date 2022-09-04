
export type initialStateType = typeof initialState
export type changeValueACType = ReturnType<typeof changeValueAC>
export type AllActionsType = changeValueACType

const initialState = [
    {id:1,value:''},{id:2,value:''},{id:3,value:''},{id:4,value:''},
    {id:5,value:''},{id:6,value:''},{id:7,value:''},{id:8,value:''},
    {id:9,value:''},
]

export const Reducer = (state:initialStateType=initialState,action:AllActionsType) => {
    switch (action.type){
        case 'CHANGE-VALUE':{
            return state.map(el => el.id === action.id? {...el,value:'x'}:el)
        }
        default:
            return state
    }


};

export const changeValueAC = (id:number)=> {
    return {type:'CHANGE-VALUE',id}as const
}

