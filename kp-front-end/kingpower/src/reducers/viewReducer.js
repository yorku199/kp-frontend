const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'EDIT':
            return state.filter(datas => datas.id !== action.id).concat({editIsOpen : true})
        default:
            return {editIsOpen : false};
    }
}

export default postReducer;