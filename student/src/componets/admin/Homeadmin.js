import "./Homeadmin.css";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";

export default function Homeadmin(){
    const [year,setyear] =useState([]);
    const [term,setterm] =useState([]);

return(
<>
        <div className='container-fluid home-hd'>   

            <h1>ระบบบันทึกข้อมูลสหกิจศึกษาและฝึกงาน มหาวิทยาลัยสงขลานครินทร์</h1>
            <h2>PSU Cooperative Education and Internship Recording System</h2>
        </div>
        <div className='bg-home ' style={{margin:"10"}}>
        <div className='grid'>
        <Form.Group as= {Col} >
                ปีการศึกษา
                <Form.Select
                    value={year}
                    onChange={(e) => setyear(e.target.value)}
                    required>
                    <option label="--กรุณาเลือกปีการศึกษา--"></option>
                    {
                        
                    }

                </Form.Select>
        </Form.Group>
        <Form.Group as= {Col} >
                <Form.Label>ภาคเรียน</Form.Label>
                <Form.Select
                    value={term}
                    onChange={(e) => setterm(e.target.value)}
                    required>
                    <option label="--กรุณาเลือกภาคเรียน--"></option>
                    {
                        
                    }

                </Form.Select>
        </Form.Group>
        
            

        </div>
        </div>

</>
    )
}