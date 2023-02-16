const { DataTypes } = require("sequelize");

module.exports=((sequelize,DataTypes)=>{
    const Department =sequelize.define("Department",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        location:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    })
    Department.associate = (models) => {
        Department.hasMany(models.Employee, {
            foreignKey: "id"
        })
    }

    return Department
})