module.exports = function(sequelize, DataTypes){
  var Movie = sequelize.define("Movie",{  

movieName:{ 
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

director: { 
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

return Movie;
};