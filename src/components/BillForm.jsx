import Form from 'react-bootstrap/Form';
import { useFriendsState } from '../hooks/FriendsContext';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import SelectPayers from './SelectPayers';


function BillForm() {

  const [friendsList,] = useFriendsState()
  const [orders, setOrders] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const a=friendsList.filter(friend=>document.getElementById(friend+'-chckbx').checked)
    console.log(a)
  }


  return (
    <>
      <Form onSubmit={handleSubmit} className="w-100">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>הזמנה:</Form.Label>
          <Form.Control type="text" placeholder="שם החבר/ה" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>הזמנה:</Form.Label>
          <Form.Control type="text" placeholder="שם החבר/ה" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>משתתפים בתשלום:</Form.Label>
        {friendsList.map(friend =>
          <Form.Check reverse inline type='checkbox' key={friend} id={friend+'-chckbx'} label={friend} />
        )}
        </Form.Group>

          <SelectPayers></SelectPayers>

        <Button variant='primary' className="w-25" type='submit'>הוסף הזמנה</Button>
      </Form>
    </>
  )
}

export default BillForm