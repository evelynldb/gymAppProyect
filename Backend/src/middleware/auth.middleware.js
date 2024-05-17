const User = require("../api/models/User.model");
const { verifyToken } = require("../utils/token");
const dotenv = require("dotenv");
dotenv.config();

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" }); //401 es cuando no hay token o está caducado
    //return next(new Error("Unauthorized"));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);

    /// solo se crea req.user cuando es un endpoint authenticado ---> tiene como middleware el auth
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(error);
  }
};

const isAuthAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    // cuando decodifico el token saco el id y el email
    console.log(decoded);
    req.user = await User.findById(decoded.id);

    // pongo un requisito mas y es que sea monitor
    if (req.user.rol !== "monitor") {
      return next(new Error("Unauthorized, not monitor"));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

const isAuthSuper = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
    //return next(new Error("Unauthorized"));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    // cuando decodifico el token saco el id y el email
    console.log(decoded);
    req.user = await User.findById(decoded.id);

    // pongo un requisito mas y es que sea admin
    if (req.user.rol !== "superadmin") {
      //!camnbio esto en mi carpeta
      return res.status(403).json({ error: "Prohíbido" }); //403 tiene token pero no tiene acceso a esa zona
      //return next(new Error("Unauthorized, not superadmin"));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuth,
  isAuthAdmin,
  isAuthSuper,
};
