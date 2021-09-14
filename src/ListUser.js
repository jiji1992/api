import React from 'react'
import { Card } from 'react-bootstrap'

export const ListUser= ({user}) => {
    return (
        <div >
                    <Card style={{ width: '20rem',margin:'20px' }}>
<span className="name">{user.username[0]}</span>
<Card.Body>
  <Card.Title>{user.name}</Card.Title>
 
  <Card.Text>
   {user.username}
  </Card.Text>
  <Card.Text>
   {user.email}
  </Card.Text>
 
</Card.Body>
</Card>
        </div>
    )
}