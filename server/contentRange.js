module.exports = (req, res, next) => {
  res.header("Access-Control-Expose-Headers", "Content-Range");
  res.header("Content-Range", "data 0-15/15");
  next();
};
