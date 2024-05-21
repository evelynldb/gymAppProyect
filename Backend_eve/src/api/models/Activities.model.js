const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitiesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["pistas", "colectivas"],
    },
    spots: {
      type: Number,
      required: true,
    }, // PLAZAS
    status: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
    },
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], //!añado s al final de like
    //!! cambiar en origen el modeloy quitar esta clave!!!
  },
  {
    timestamps: true,
  }
);

const Activities = mongoose.model("Activities", ActivitiesSchema); //lo verde es como yo lo llamo en mi código, el string es para mongo, y lo azul es el esquema

module.exports = Activities;
