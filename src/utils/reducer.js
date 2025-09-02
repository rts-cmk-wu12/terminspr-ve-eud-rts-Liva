function reducer(state, action) {
    switch (action.type) {
        case 'setTitle':
            return {
                ...state,
                title: action.newTitle
            }
        case 'isDisabled':
            return {
                ...state,
                disabled: true
            }
        case 'setText':
            return {
                ...state,
                text: action.newText
            }
        case 'methodDelete':
            return {
                ...state,
                method: 'DELETE'
            }
        case 'methodPost':
            return {
                ...state,
                method: 'POST'
            }
    }
}

export default reducer;