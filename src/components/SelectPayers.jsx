import Dropdown from 'react-bootstrap/Dropdown';
import React, { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useFriendsState } from '../hooks/FriendsContext';

const MAX_FRIENDS_SELECT_NUMBER=5

function SelectPayers() {
    const [friendsList,] = useFriendsState()
    const [selectedFriends,settt]=useState([])

    return (
        <Dropdown style={{direction:"ltr"}}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                {selectedFriends.length===0? "יש לבחור משלמים" :selectedFriends.length>MAX_FRIENDS_SELECT_NUMBER?`${MAX_FRIENDS_SELECT_NUMBER+1}+`:selectedFriends.toString()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
    {friendsList.map(friend=>

                <Form.Check
                key={friend}
                name={friend}
                type="checkbox"
                onChange={(e)=>{
                    if (e.target.checked){
                        settt(pre=>[...pre, e.target.name])
                    }else{
                        settt(pre=>pre.reduce(((s,n)=> (n!==e.target.name)? [...s, n]:s),[]))
                    }
                }}
                label={friend} />
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SelectPayers