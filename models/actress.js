module.exports = function(sequelize, DataTypes){
  var Actresses = sequelize.define("Actresses",{  

actressName:{ 
  type: DataTypes.STRING, 
  allowNull: false, 
},

nominations:{ 
  type: DataTypes.INTEGER, 
  allowNULL: false,
  default: 0, 
},

nominated:{
  type: DataTypes.STRING,
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

return Actresses;
};