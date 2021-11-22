import {createLogic} from "redux-logic";
import {INIT_APP} from "../../Constants/InitConstants";

export const InitManager = createLogic({
   type: INIT_APP,

   async process({action, getState}, dispatch, done) {
        console.log('action', action, 'getState', getState );
       
       done();
   }
});


export const InitManagers = [
    InitManager
];
