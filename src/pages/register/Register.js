import { useState } from 'react';
function Register() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
        <label>Username:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>Password:
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <label>Email:
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
        <label>Specify gender:
          <input
            type="text"
            name="sex"
            value={inputs.sex || ""}
            onChange={handleChange}
          />
        </label>
        <label>Specify age:
          <input
            type="text"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <label>Call:
          <input
            type="text"
            name="call"
            value={inputs.call || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
        
      </form>
    </div>

  )
}

export default Register;