import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
import React, { useState } from "react";
import UserDataService from "../services/user.service.js";



    const AddUser = () => {
      const initialUserState = {
        id: null,
        email: "",
        password: "",
    };

    const [user, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
    };

    const saveUser = () => {
      var data = {
        email: user.email,
        password: user.password
      };

      UserDataService.create(data)
        .then(response => {
         setUser({
           id: response.data.id,
           email: response.data.email,
           password: response.data.password
         });
         setSubmitted(true);
          console.log(response.data);
         })
         .catch(e => {
          console.log(e);
         });
    };

    const newUser = () => {
      setUser(initialUserState);
      setSubmitted(false);
    };

    return (
        <Container className='pt-5 mt-5'>
          <Row>
            <Col xs={12} md={4}>
			 <Card>
			  <Card.Body>
			   <Form>
				<Form.Group className="mb-3" controlId="formBasicEmailSubmit">
				 <Form.Label>Email address</Form.Label>
				 <Form.Control 
				 type="email" 
				 id="email" 
                 value={user.email}
                 onChange={handleInputChange}
				 name="email" 
				 placeholder="Enter email" 
				 />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPasswordSubmit">
				 <Form.Label>Password</Form.Label>
				 <Form.Control 
				 type="password"
				 id="password"
                 value={user.password}
                 onChange={handleInputChange}	
                 name="password"				 
				 placeholder="Password" 
				 />
				</Form.Group>				
				<Button onClick={saveUser} variant="primary" type="submit">
				Submit
				</Button>
			   </Form>					
			  </Card.Body>
			 </Card>
            </Col>
            <Col xs={12} md={4}>
		     <Card>
			  <Card.Body>
			   <Table striped bordered hover>
 			    <thead>
			     <tr>
			      <th>#</th>
			      <th>Email</th>
			      <th>Password</th>
			     </tr>
			    </thead>
			   </Table>  
			  </Card.Body>
			 </Card>
			 <Card className='mt-5'>
			  <Card.Body>			   
			   <Form>
				<Form.Group className="mb-3" controlId="formBasicEmailSearch">
				 <Form.Label>Email address</Form.Label>				
				 <Form.Control 
				 type="email" 
				 id="email" 
                 value={user.email}
                 onChange={handleInputChange}
				 name="email" 
				 placeholder="Enter email" 
				 />
				</Form.Group>
				<Button variant="primary" type="submit">
				Search
				</Button>				
               </Form>				
			  </Card.Body>
			 </Card>			 
            </Col>
            <Col xs={12} md={4}>
			 <Card>
			  <Card.Body>
			   <Form>
				<Form.Group className="mb-3" controlId="formBasicEmailUpdate">
				 <Form.Label>Email address</Form.Label>				
				 <Form.Control 
				 type="email" 
				 id="email" 
                 value={user.email}
                 onChange={handleInputChange}
				 name="email" 
				 placeholder="Enter email" 
				 />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPasswordUpdate">
				 <Form.Label>Password</Form.Label>
				 <Form.Control 
				 type="password"
				 id="password"
                 value={user.password}
                 onChange={handleInputChange}	
                 name="password"				 
				 placeholder="Password" 
				 />
				</Form.Group>				
				<Button variant="primary" type="submit">
				Update
				</Button>				
               </Form>
			  </Card.Body>
			 </Card>
			 <Card className='mt-5'>
			  <Card.Body>			   
			   <Form>
				<Form.Group className="mb-3" controlId="formBasicEmailDelete">
				 <Form.Label>Email address</Form.Label>				
				 <Form.Control 
				 type="email" 
				 id="email" 
                 value={user.email}
                 onChange={handleInputChange}
				 name="email" 
				 placeholder="Enter email" 
				 />
				</Form.Group>
				<Button variant="primary" type="submit">
				Delete
				</Button>				
               </Form>				
			  </Card.Body>
			 </Card>
            </Col>			
          </Row>
        </Container>
    );
    };

export default AddUser		