const sequelize = require('../property/Database')
const {Model,Sequelize} = require('sequelize')
const SanPham = require('./sanpham')

class HinhAnh extends Model{}

HinhAnh.init({
    maHA:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    duongDan :{
        type:Sequelize.STRING, 
    },
},{sequelize})

HinhAnh.belongsTo(SanPham,{foreignKey:'maSanPham'})
