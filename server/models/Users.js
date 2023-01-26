module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", { // 테이블 이름을 Users로 설정
      // field 설정
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    // Users 모델을 가져온 후, Users와 Posts를 연결
    // Users.associate = (models) => {
    //   Users.hasMany(models.Posts, { 
    //     onDelete: "cascade",
    //   });
    // };
    
    return Users;
  };