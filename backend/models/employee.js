const { DataTypes } = require("sequelize");

module.exports=((sequelize,DataTypes)=>{
    const Employee =sequelize.define("Employee",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        salary:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        depid:{
                type: DataTypes.INTEGER,
                references: {
                    model: 'Departments',
                    key: 'id'
                },
                allowNull:false,
            validate:{
                notEmpty:true
            },
            }

    })

    Employee.associate = (models) => {
        Employee.belongsTo(models.Department, {
            foreignKey: "depid"
        });
    }
        return Employee
})
