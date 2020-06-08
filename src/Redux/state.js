let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет, как дела?', likesCount: 12},
                {id: 2, message: 'Это мой первый пост', likesCount: 11},
                {id: 3, message: 'Это мой первый пост', likesCount: 11},
                {id: 4, message: 'Это мой первый пост', likesCount: 11}],
            newPostText: 'Hello'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Как дела?'},
                {id: 3, message: 'Пока'},
                {id: 4, message: 'Пока'},
                {id: 5, message: 'Пока'}
            ],
            dialogs: [
                {id: 1, name: 'Андрей'},
                {id: 2, name: 'Юра'},
                {id: 3, name: 'Александр'},
                {id: 4, name: 'Миша'},
                {id: 5, name: 'Имя'}
            ]

        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store;
window.store = store;