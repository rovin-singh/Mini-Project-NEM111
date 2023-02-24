import { useState } from "react";

function Signup() {
    const [formdata, setFormData] = useState({});
    function handleChnage(e) {
        const { value, name } = e.target;
        setFormData({ ...formdata, [name]: value })
    }
    // console.log(formdata)
    return (
        <div>
            <h3>Signup Please</h3>
            <input type="text" placeholder="Enter your name" name="name" onChange={handleChnage} /><br />
            <input type="text" placeholder="Enter Your Email" name="email" onChange={handleChnage} /><br />
            <input type="password" placeholder="Enter your password" name="password" onInput={handleChnage} /><br />
            <button>Submit</button>
        </div>
    )
}

export default Signup;