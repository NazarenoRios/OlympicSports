const {Model, DataTypes} = require("sequelize");
const sequelize = require("../db/db")


class Product extends Model {
  
}

Product.init(
    {
      name: {
        type: DataTypes.STRING,

       // allowNull: false
      },
      image: {
        type: DataTypes.STRING,
       // allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
       // allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
       // allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
       //allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
       // allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
       // allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        //allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        // allowNull:false,
      }

    },
    {
      sequelize,
      modelName: "product",
    }
  );


  module.exports = Product