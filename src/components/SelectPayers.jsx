import Dropdown from 'react-bootstrap/Dropdown';
import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import { useFriendsState } from '../hooks/FriendsContext';

function SelectPayers() {
    const [friendsList,] = useFriendsState()
    return (
        <Dropdown style={{direction:"ltr"}}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
    {friendsList.map(friend=>

                <Form.Check
                key={friend}
                name={friend}
                type="checkbox"
                label={friend} />
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SelectPayers