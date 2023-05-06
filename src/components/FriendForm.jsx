import { useRef } from "react";
import {useFriendsState} from '../hooks/FriendsContext'
import Button from 'react-bootstrap/Button';
import FriendsList from './FriendList'
import Form from 'react-bootstrap/Form';


function FriendForm() {

  const [friendsList, setFriendsList] = useFriendsState()
  const newFriend = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    const friendName = newFriend.current.value
    if (friendName && !friendsList.includes(friendName)) {
      setFriendsList(f => {
        return [...f, friendName]
      })
      newFriend.current.value = ''
    }
  }

  return (
    <>
      <div className="rtl my-4 mx-auto w-75">אנחנו תמיד שמחים להכיר את החברים שלכם!</div>
      <Form onSubmit={handleSubmit} className="w-75 m-auto">
        <Form.Group className="mt-5 mb-3">
          <Form.Label>הוספת חבר/ה:</Form.Label>
          <Form.Control ref={newFriend} type="text" placeholder="שם החבר/ה" />
        </Form.Group>
        <div className="mt-5 mb-3">רשימת החברים שלכם:</div>
        <FriendsList editable={true}></FriendsList>
        <div className="d-flex justify-content-between mt-4">
          <Button variant='success' className="w-25" type="submit">הוספה</Button>
          <Button variant='primary' className="w-25" href="/">סיום</Button>
        </div>
      </Form>
    </>
  )
}

export default FriendForm