import "./Generalinfo.css";
import { Form } from "react-bootstrap";

export default function Generalinfo(){
    
    return(
        <>
        <div className='container-fluid generalinfo-hd'>    
            <h1>ระบบบันทึกข้อมูลสหกิจศึกษาและฝึกงาน มหาวิทยาลัยสงขลานครินทร์</h1>
            <h2>PSU Cooperative Education and Internship Recording System</h2>
        </div>
        <div className='bg-generalinfo' style={{margin:"10"}}>
            <div className="text">
                <br></br>
                <h4>ส่วนที่ 1 : ข้อมูลทั่วไป</h4>
            </div>
            <br></br>
            <Form>
                <Form.Control>
                
                </Form.Control>
                <br></br>
                <Form.Control>
                
                </Form.Control>
                <br></br>
                <Form.Control>
                
                </Form.Control>
                <br></br>
                <Form.Control>
                
                </Form.Control>
                <br></br>
                <Form.Control>
                
                </Form.Control>
                <br></br>
                <Form.Control>
                
                </Form.Control>
                <br></br>
                <Form.Control>
                
                </Form.Control>
            </Form>

        </div>
        </>
    )
}