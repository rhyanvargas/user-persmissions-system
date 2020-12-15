const { users } = require("./data");

function authUser(req, res, next) {
  if (req.user == null) {
    res.status(403);
    return res.send("You need to sign in");
  }

  next();
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      res.send("User is not Admin");
    }
    next();
  };
}

module.exports = {
  authUser,
  authRole,
};
