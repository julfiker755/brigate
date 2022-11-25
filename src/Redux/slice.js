import { createSlice } from '@reduxjs/toolkit'

const  initialState={
    items:[]
}

const slice=createSlice({
    name:'basket',
    initialState,
    reducers:{
        additem:(state,action)=>{
            state.items=[action.payload,...state.items]
        },
        removeitem:(state,action)=>{
            state.items=state.items.filter(item=>item.id !== action.payload)
        },
        Increasequantity:(state,action)=>{
            state.items=state.items.map(i=>{
            if(i.id !== action.payload) return i
            return{
                ...i,
                quantity:i.quantity+1
            }
            })
        },
        decreasequantity:(state,action)=>{
            state.items=state.items.map(i=>{
                if(i.id !== action.payload) return i
                if(i.quantity === 1) return false
                return {
                    ...i,
                    quantity:i.quantity-1
                }
            }).filter(x=>x !== false)
        }
    }
})
export const {additem,removeitem,Increasequantity,decreasequantity}=slice.actions
export const selectcount=state=>state.basket.items
export const selecttotal=state=>state.basket.items.map(x=>x.price*x.quantity).reduce((a,b)=>a+b,0)
export const toalquantiy=state=>state.basket.items.map(x=>x.quantity).reduce((a,b)=>a+b,0)
export default slice.reducer