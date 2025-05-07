const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.set("strictQuery", true);

mongoose
    .connect("mongodb://127.0.0.1:27017/billing-cycle", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Error connecting MongoDB"));

module.exports = mongoose;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório";
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado é maior que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.String.enum =
    "'{VALUE}' não é válido para o atributo '{PATH}'.";
