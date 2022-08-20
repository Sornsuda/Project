 // import { auto } from '@popperjs/core';
 import 'bootstrap/dist/css/bootstrap.min.css';

 import { useState } from 'react';
 import { Form, Row, Col, Button } from 'react-bootstrap';
 import { useNavigate } from 'react-router-dom';
 import ("./style.css")
 var md5 = require("md5");

 export default function Login() {
     const [validated, setValidated] = useState(false);
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
 
     let navigate = useNavigate();
 
     const onLogin = (event) => {
         const form = event.currentTarget;
         event.preventDefault();
     
         if(form.checkValidity() === false) {
             event.stopPropagation();
         } else {
             doLogin();
         }
     
         setValidated(true);
     }
     
     const doLogin = async () => {
         console.log("11111");
         const data1 = await getAuthenToken();
         const authToken = data1.data.auth_token;
 
         const data2 = await getAccessToken(authToken);
         //console.log(data2.data.access_token);
         localStorage.setItem("access_token", data2.data.access_token);
         localStorage.setItem("user_id", data2.data.account_info.user_id);
         localStorage.setItem("username", username);
         localStorage.setItem("first_name", data2.data.account_info.first_name);
         localStorage.setItem("last_name", data2.data.account_info.lastname);
         localStorage.setItem("address", data2.data.account_info.address);
         localStorage.setItem("role_id", data2.data.account_info.role_id);
         localStorage.setItem("role_name", data2.data.account_info.role_name);
         localStorage.setItem("status", data2.data.access_info.status);
        
         if(localStorage.getItem("status"))
         navigate("home", { replace: false});
  
     }
 
     const getAuthenToken = async () =>{
         const response = await fetch(
             "http://localhost:8080/api/authen_request",
             {
                 method: "POST",
                 headers: {
                     Accept: "application/json",
                     'Content-Type' : 'application/json',
                 },
                 body: JSON.stringify({
                     username: md5(username)
                 })
             }
         );
         
         const data = await response.json();
     
         console.log(data);
     
         return(data);
     }
 
     const getAccessToken = async (authToken) => {
         console.log("22222");
         var baseString = username + "&" + md5(password);
         var authenSignature = md5(baseString);
 
         const response = await fetch(
             "http://localhost:8080/api/access_request",
             {
                 method: "POST",
                 headers: {
                     Accept: "application/json",
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({
                     auth_signature: authenSignature,
                     auth_token: authToken
                 })
             }
         );
         const data = await response.json();
         console.log("data acc:"+data.auto_token);
         return data;
     }
 
     return (
        <>
        <div className='container-fluid login-hd'>    
            <h1>ระบบบันทึกข้อมูลสหกิจศึกษาและฝึกงาน มหาวิทยาลัยสงขลานครินทร์</h1>
            <h2>PSU Cooperative Education and Internship Recording System</h2>
        </div>
         <div className='bg-login  ' style={{margin:"10"}}>
            <div className='bg-login ' >
             <Form noValidate validated={validated} onSubmit={onLogin}>
                <div className='grid'>
                <Row className="mb-3 " >
                     <Form.Group as={Col} controlId="validateUsername">
                         
                         <Form.Control
                             required
                             type="text"
                             placeholder="Username"
                             onChange={(e) => setUsername(e.target.value)}
                         />
                         <Form.Control.Feedback  type="invalid">
                             กรุณากรอก Username
                         </Form.Control.Feedback>
                     </Form.Group>
                 </Row>
                 <Row className="mb-3">
                     <Form.Group as={Col} controlId="validatePassword">
                        
                         <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                         <Form.Control.Feedback type="invalid">
                             กรุณากรอก Password
                         </Form.Control.Feedback>
                     </Form.Group>
                 </Row>
                 <Row>
                     <Col md={3} className="m-auto">
                         <Button type="submit">Login</Button>
                     </Col>
                 </Row>
                </div>
             </Form>
             </div>
         </div>
         </>
     );
 }
 
 