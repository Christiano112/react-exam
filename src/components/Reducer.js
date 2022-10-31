export default function myReducer(myCount, action) {
    switch (action.type) {
        case "add": {
            return myCount = myCount + 1;
        }
        case "minus": {
            return myCount = myCount - 1;
        }
        case "set": {
            return myCount = action.valued.target.value
        }
        case "reset": {
            return myCount = 0;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}