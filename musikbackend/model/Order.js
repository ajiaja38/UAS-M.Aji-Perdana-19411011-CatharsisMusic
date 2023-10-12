const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectId = mongoose.Schema.ObjectId

const OrderSchema = new Schema({
    idUser: {
      type: objectId
    },
    idMusik: {
      type: objectId
    },
    harga: {
      type: Number
    },
    jumlah: {
      type: Number
    },
    total: {
      type: Number
    },
    image: {
        type: String
    },
    // 1 = belum verifikasi, 2 = sedang dalam pengiriman, 3 = sudah di terima
    status: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('order', OrderSchema)