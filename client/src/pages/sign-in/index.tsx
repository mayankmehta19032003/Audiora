
const SignIn = () => {
  
  return (
    <div className="sign-in">
      <h1>Welcome to Audiora</h1>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
