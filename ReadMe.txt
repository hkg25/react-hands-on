Impure function => same input --> different output

Pure function => same input --> same output

React is used for dom/view manipulation
Redux is used for state management and it is synchronous
    -- Action
    -- Action Creator
    -- Dispatch
    -- Reducer
    -- Store 

Flux is an architecture concept and Redux is an implementation of input

Reducers => pure functions + immutable + no state
    --> 2 parametere ( state + action )
    -- Store will the call the Reducer


Store => Model/Data management
    -- update data on events
    -- notify the views after changes in data
    -- takes one argument/two arguments which is reducer and it's a function in redux lib
    -- getState method is to know the last state
    -- dispatch is to put the data in store


Actions => are payload of information
    -- it is an object and passed as argument in Reducer as second arg
    -- also passed as an arg in dispatch method for store the info in Store


----------------------------------React Redux Library -----------------------------------------
    -- connects React and Redux
    -- create bridge using container
    -- improve unit testing 
    -- provide segregation between react and redux and keep them independent


-------------------------------Middlewares-----------------------------------------------------
-- added between Dispatch and Reducers
-- next function calls next middleware/reducer in the chain
-- applyMiddleware function from redux


-------------------------------Thunk Middleware-------------------------------------------------
-- used to call ajax in redux as redux is sync in nature
-- It's a middleware
-- Code is  : https://github.com/gaearon/redux-thunk/blob/master/src/index.js
-- check for function type and call the function. Check gitHub Code
-- we can not return function from action


-------------------------Downside of react----------------------------------------------------
when application is form intensive, Do not use react. Go with angular. It's a downside of react.
