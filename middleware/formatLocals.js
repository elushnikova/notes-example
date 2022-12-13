function formatLocals(req, res, next) {
  res.locals = {
    title: null,
    error: null,
    data: null,
  };

  next();
}

module.exports = formatLocals;
