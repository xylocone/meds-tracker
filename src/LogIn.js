import Button from "./components/Button"
export default function LogIn() {
  const linkStyle = {
    color: 'red',
    textDecoration: 'none'
  }
  const styleForm = {
    height: "100vh",
    display: 'flex' ,
    flexDirection: 'column',
    justifyContent: "center",
    color: "#c514eb",
    alignItems: 'center',
  }
  return (
    <div style = { styleForm }>
      <div>
      <h1>login</h1>
      </div>
      <form>

        <div>
        <label for="username">USERNAME</label>
        <br></br>
        <input type="text" id="username" name="Username"></input>
        <br></br>
        </div>

        <div>
        <label for="password">PASSWORD</label>
        <br></br> 
        <input type="password" id="password"></input>
        <br></br>
        </div>

      </form>
      <br></br>
      <Button>LogIn</Button>
      <p>Not a user? <a href="" style= { linkStyle }>Sign up</a> instead</p>
    </div>
  )
}

