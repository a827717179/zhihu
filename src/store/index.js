import {Dispatcher} from 'flux'
import EventEmitter from 'events'
class State extends EventEmitter{
    data=[]
}
let state = new State;
let dispatcher = new Dispatcher;
dispatcher.register((action) => {
    switch (action.actionType) {
        case 'addnew':
            state.data.push(action.actionParams);
            state.emit('change1');
            break;
        case 'remnew':
            let num = state.data.findIndex(value => {
                return action.actionParams.id===value.id
            });
            state.data.splice(num,1);
            state.emit('chagne2');
            break;
        case "jianting":
            let flag = state.data.some(value => {
                return action.actionParams.id===value.id
            });
            if(flag){
                state.emit('ting');
            }
            break;
    }
});
export default {
    state,
    dispatcher
}




