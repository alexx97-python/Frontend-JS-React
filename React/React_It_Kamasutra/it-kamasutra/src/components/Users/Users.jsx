import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( 
        [{id: 1, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: false, fullName: 'Oleksii Sheiko', status: 'I am a React Developer', location :{city: 'Kiev', country: 'Ukraiene'}},
        {id: 2, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: true, fullName: 'Vovan Kovalenko', status: 'I am a .Net Developer', location :{city: 'Kiev', country: 'Ukraiene'}},
        {id: 3, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: false, fullName: 'Zakhar Ruban', status: 'I am a Website Owner', location :{city: 'Akhtyrka', country: 'Ukraiene'}},
        {id: 4, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: true, fullName: 'Oleksander ProstoBes', status: 'I am a IOS Developer', location :{city: 'Kiev', country: 'Ukraiene'}},
        {id: 5, photoUrl: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg', followed: false, fullName: 'Vladislav ', status: 'I am a Lawyer', location :{city: 'Kiev', country: 'Ukraiene'}}]
    )
}
    

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} alt="avatar" className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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
                })
            }
        </div>
    );
}

export default Users;