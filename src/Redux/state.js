let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Привет, как дела?', likesCount: 12},
            {id: 2, message: 'Это мой первый пост', likesCount: 11},
            {id: 3, message: 'Это мой первый пост', likesCount: 11},
            {id: 4, message: 'Это мой первый пост', likesCount: 11}
        ]
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
}

export default state;