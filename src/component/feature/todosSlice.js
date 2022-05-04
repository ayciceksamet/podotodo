 import {createSlice} from '@reduxjs/toolkit'

 let nextTodoId = 0;

const todoSlice = createSlice({

    name: 'todos',

    initialState: [],

    reducers: {

        addTodo(state, action){
            console.log("ACTION PAYLOAD ")
            console.log(action)
            state.push({id: nextTodoId++, text: action.payload, completed: false})
            console.log("STATE ")
            console.log(state)
        }


    }


})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer

