module.exports = function(sequelize, DataTypes){
  var Director = sequelize.define("Director",{  

directorName:{ 
  type: DataTypes.STRING, 
  allowNull: false, 
},

nominations:{ 
  type: DataTypes.INTEGER, 
  allowNULL: false,
  default: 0, 
},


releaseYear:{
  type: DataTypes.STRING,
  allowNull: false,
},

movieName:{ 
  type: DataTypes.STRING, 
  allowNull: false, 
},

createdAt: {
  type: DataTypes.STRING,
  allowNull: true
},

updatedAt: {
  type: DataTypes.STRING,
  allowNull: true
},

});

return Director;
};