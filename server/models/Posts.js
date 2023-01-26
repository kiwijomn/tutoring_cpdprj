module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        //내부에 테이블에 포함하려는 필드나 열을 작성

        //제목
        title: {
            type: DataTypes.STRING, //문자열 타입
            allowNull: false, //not null
        },
        //게시물 설명
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //사용자 이름
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        });

        return Posts; //Posts 객체 반환
};