export function logger(store){
    return function(next){
        return function(action){
            console.log("logger middleware ", action);

            //call next middleware or reducers
            let result = next(action);

            // all reducers called here
           return result;

        }
    }
}
