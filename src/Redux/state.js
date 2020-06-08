import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

            dialogs: [
                {id: 1, name: 'Андрей'},
                {id: 2, name: 'Юра'},
                {id: 3, name: 'Александр'},
                {id: 4, name: 'Миша'},
                {id: 5, name: 'Имя'}
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Как дела?'},
                {id: 3, message: 'Пока'},
                {id: 4, message: 'Пока'},
                {id: 5, message: 'Пока'}
            ],
             newMessageBody: ""
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}

export default store;
window.store = store;