const jwt = require("jsonwebtoken");

module.exports = auth = (header) => {
  try {
    const token = header.split(" ")[1];

    let decodedToken;

    if (!token) throw new Error("Not autentacated!");

    jwt.verify(token, process.env.SECRET, (_err, decoded) => {
      decodedToken = decoded;
    });

    if (!decodedToken) throw new Error("Not autentacated!");

    return { userId: decodedToken.userId };
  } catch (err) {
    throw new Error(err);
  }
};
