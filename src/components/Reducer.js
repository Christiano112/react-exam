export default function myReducer(myCount, action) {
    switch (action.type) {
        case "add": {
            return myCount + 1;
        }
        case "minus": {
            return myCount - 1;
        }
        case "set": {
            return Number(action.valued.target.value)
        }
        case "reset": {
            return 0;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}