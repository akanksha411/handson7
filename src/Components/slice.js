import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
name : 'dataSlice',
initialState : [
    {name:'akanksha',age:'23',course:'MCA',batch:'17'},
    {name:'shivangi',age:'23',course:'MCA',batch:'17'}
],
reducers : {
    editData:(state, action)=>{
        console.log(state)
       console.log(action.payload)
        state[action.payload.index] = action.payload.newObj;
        return(state)
    },
    addData:(state, action)=>{
      
      console.log(state)
      console.log(action.payload)
      state.push(action.payload)
      console.log(state)
      return (state)

    }
}
})
export const { editData, addData } = dataSlice.actions
export default dataSlice.reducer;