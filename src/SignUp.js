import { Form } from "react-router-dom";
import Button from "./components/Button";

const styleForm = {
    height: "100vh",
    display: 'flex' ,
    flexDirection: 'column',
    justifyContent: "center",
    color: "blue" ,
    justifyContent: 'center',
    alignItems: 'center',
  }

export default function SignUp() {
  return (
  <div style={styleForm}>
    <div>
      <h1>Sign Up</h1>
    </div>
      <Form>
        <div>
          <lable for="EMAIL ID">EMAIL ID</lable><br></br>
          <input type="text" id="EMAIL ID" name="EMAIL ID"></input><br></br>
        </div>

        <div>
          <lable for="username">USERNAME</lable><br></br>
          <input type="text" id="username" name="username"></input><br></br>
        </div>

        <div>
          <lable for="password">PASSWORD</lable><br></br>
          <input type="password" id="password" name="password"></input>
        </div>      
      </Form>
    
    <br></br>
    <div>
      <Button>SignUp</Button>
    </div>
  </div>
  );
}
