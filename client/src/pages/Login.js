import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // login 버튼 클릭 시 호출되는 함수로, login 라우트에 대한 요청
  // username과 password를 담고있는 data 객체를 전달
  const login = () => {
    const data = { username: username, password: password }; // input 값으로 받은 username과 password를 저장
    axios.post("http://localhost:3001/auth/login", data).then((response) => { // 요청 되었을 때,
      console.log(response.data); // 서버로부터 무엇을 얻었는지 확인하기 위한 response를 콘솔에 출력
    });
  };
  return (
    <div className="loginContainer">
      <label>Username:</label>
      <input type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}>Login </button>
    </div>
  );
}

export default Login;