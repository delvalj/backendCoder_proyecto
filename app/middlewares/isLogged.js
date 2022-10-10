const isLogged = (req, res, next) => {
  if (req.user) {
    console.log(req.user);
    return next();
  } else {
    res.redirect("/login");
  }
};

module.exports = isLogged;
