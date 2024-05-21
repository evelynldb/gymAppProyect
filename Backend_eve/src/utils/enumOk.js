//!--------------ENUM TIPO ACTIVIDADES--------------------

const enumTypeActivityIsOk = (type) => {
  const enumOk = ["pistas", "colectivas"];
  if (enumOk.includes(type)) {
    return true;
  } else {
    return false;
  }
};
module.exports = enumTypeActivityIsOk;
