import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://mysitem.ru/images/windows/553.jpg',
                    followed: false,
                    fullName: 'Александр',
                    status: 'Hello friends',
                    location: {city: 'Tver', country: 'Russia'}
                },
                {
                    id: 2, photoUrl: 'https://mysitem.ru/images/windows/553.jpg',
                    followed: true, fullName: 'Юрий', status: 'Hello friends', location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://mysitem.ru/images/windows/553.jpg',
                    followed: false,
                    fullName: 'Михаил',
                    status: 'Hello friends',
                    location: {city: 'Minks', country: 'Belarus'}
                },
                {
                    id: 4, photoUrl: 'https://mysitem.ru/images/windows/553.jpg',
                    followed: true, fullName: 'Женя', status: 'Hello friends', location: {city: 'Kiev', country: 'Ukraine'}
                }

            ]
        )
    }

    return <div>
        {
           props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img src = {u.photoUrl} className={styles.userPhoto}/>
                   </div>
                   <div>
                       { u.followed
                           ? <button onClick = { () => {
                               props.unfollow(u.id)
                           } }>Unfollow</button>
                           : <button onClick={ () => {
                               props.follow(u.id)
                           } }>Follow</button> }
                   </div>
               </span>
               <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
           </div>)
        }
    </div>
}

export default Users;