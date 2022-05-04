import { configureStore} from "@reduxjs/toolkit";

import todosSlice from "./feature/todosSlice";

export const store = configureStore({
    reducer: {
        todos: todosSlice
    }
})