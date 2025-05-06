const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/billing-cycle')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err))

module.exports = mongoose;
