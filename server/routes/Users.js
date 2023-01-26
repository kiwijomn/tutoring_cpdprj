const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

// register에 대한 로직
router.post("/", async (req, res) => {
  const { username, password } = req.body; // body를 통해 전송되는 데이터
  
  // .hash(첫번째 인자-비밀번호의 Plain Text, 두번째 인자-해시 함수 반복 횟수)
  bcrypt.hash(password, 10).then((hash) => { // hash 결과를 전달
    Users.create({ // Users 모델에게 새로운 user를 db에 등록
      username: username,
      password: hash,
    });
    res.json("user 등록 성공");
  });
});

// login에 대한 로직
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Users 테이블의 값과 로그인 화면에서 입력한 username이 일치하는지 비교해야 함.
  // sequelize에게 Users 테이블의 username과 로그인 하려는 사용자의 username이 같은지 확인하도록 해줌
  // 만약 같은 사용자가 있다면 해당 값을 user에 반환해주고, 없다면 user는 empty 값
  const user = await Users.findOne({ where: { username: username } });

  // user가 존재하지 않는다면, 에러 메세지 출력
  if (!user) res.json({ error: "존재하지 않는 사용자입니다." });

  // user가 존재한다면 비밀번호를 비교
  // .compare(첫번째 인자-현재 입력하려는 값, 두번째 인자-db에 저장되어 있는 값)
  bcrypt.compare(password, user.password).then((match) => { // compare 결과를 match에 반환
    // match가 false라면, 에러 메세지 출력
    if (!match) res.json({ error: "잘못된 비밀번호입니다." });
    res.json("로그인 성공");
  });
});

module.exports = router;