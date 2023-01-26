const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

// 비동기식 async - await
router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll(); // findAll function
    res.json(listOfPosts);
});

// 비동기식 async - await
router.post("/", async (req, res) => {
    // 데이터 삽입과 같은 모든 로직을 작성
    const post = req.body; // 데이터에 access (본문에서 데이터를 가져옴 => post 변수에 저장)
    await Posts.create(post); // sequelize function 호출
    res.json(post); //post return
});

module.exports = router;