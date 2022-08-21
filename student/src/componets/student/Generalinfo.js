import "./Generalinfo.css";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";

export default function Generalinfo(){
    const [campus,setcampus] =useState([]);
    const [faculty,setfaculty] =useState([]);
    const [bachelor,setbachelor] =useState([]);
    const [year,setyear] =useState([]);
    const [term,setterm] =useState([]);
    const [phone,setphone] =useState([]);
    const [email,setemail] =useState([]);
    
    return(
        
        <>
        <div className='container-fluid generalinfo-hd'>    
            <h1>ระบบบันทึกข้อมูลสหกิจศึกษาและฝึกงาน มหาวิทยาลัยสงขลานครินทร์</h1>
            <h2>PSU Cooperative Education and Internship Recording System</h2>
        </div>
        <div className='bg-generalinfo' style={{margin:"10"}}>
            <h2 className="header">ส่วนที่ 1 : ข้อมูลทั่วไป</h2>

            <div className='grid'>
            <Form.Group as= {Col} >
                <Form.Label>1. วิทยาเขต</Form.Label>
                <Form.Select
                    value={campus}
                    onChange={(e) => setcampus(e.target.value)}
                    required>
                    <option label="--กรุณาเลือกวิทยาเขต--"></option>
                    {
                        
                    }

                </Form.Select>
            </Form.Group>
            <br></br>
            <Form.Group as= {Col} >
                <Form.Label>2. คณะ</Form.Label>
                <Form.Select
                    value={faculty}
                    onChange={(e) => setfaculty(e.target.value)}
                    required>
                    <option label="--กรุณาเลือกคณะ--"></option>
                    {
                        
                    }

                </Form.Select>
                
            </Form.Group>
            <br></br>
            <Form.Group as= {Col} >
                <Form.Label>3. สาขา</Form.Label>
                <Form.Select
                    value={bachelor}
                    onChange={(e) => setbachelor(e.target.value)}
                    required>
                    <option label="--กรุณาเลือกสาขา--"></option>
                    {
                        
                    }

                </Form.Select>
                
            </Form.Group>
            <br></br>
            <Form.Group as= {Col} >
                <Form.Label>4. ปีการศึกษาปฏิบัติงานออกฝึกงาน</Form.Label>
                <Form.Select
                    value={year}
                    onChange={(e) => setyear(e.target.value)}
                    required>
                    <option label="--กรุณาเลือกปีการศึกษา--"></option>
                    {
                        
                    }

                </Form.Select>
                
            </Form.Group>
            <br></br>
            <Form.Group as= {Col} >
                <Form.Label>5. ภาคการศึกษาปฏิบัติงานออกฝึกงาน</Form.Label>
                <Form.Select
                    value={term}
                    onChange={(e) => setterm(e.target.value)}
                    required>
                    <option label="--กรุณาเลือกภาคเรียน--"></option>
                    {
                        
                    }

                </Form.Select>
                
            </Form.Group>
            <br></br>
            <Form.Group as= {Col} >
                <Form.Label>6. เบอร์โทร</Form.Label>
                <Form.Control
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    required
                    placeholder="เบอร์โทร">
                    
                    {
                        
                    }

                </Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group as= {Col} >
                <Form.Label>7. Email</Form.Label>
                <Form.Control
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                    placeholder="email">
                    
                    {
                        
                    }

                </Form.Control>
            </Form.Group>
                <Row>
                     <Col md={3} className="m-auto mt-3">
                         <Button type="submit">บันทึก</Button>
                     </Col>
                 </Row>

        </div>
        </div>

        
        </>
    )
}