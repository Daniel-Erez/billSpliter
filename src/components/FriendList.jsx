import React from 'react'
import { useFriendsState } from '../hooks/FriendsContext'
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge } from "react-bootstrap";

function FriendList({ editable }) {
  const [friendsList, setFriendsList] = useFriendsState()

  function handleRemovefriend(friendName) {
    if (friendsList.includes(friendName)) {
      setFriendsList(f => {
        const copy = [...f]
        copy.pop(friendName)
        return copy
      })
    }
  }

  return (
      <ListGroup>
        {friendsList.map(friendName => {
          return <ListGroup.Item key={friendName} className="d-flex justify-content-between align-items-start">
            <span>{friendName}</span>
            {editable && <Badge
              onClick={() => handleRemovefriend(friendName)}
              bg="danger"
              role="button"
              pill className="user-select-none">
              X
            </Badge>}
          </ListGroup.Item>
        })}
      </ListGroup>
  )
}

export default FriendList