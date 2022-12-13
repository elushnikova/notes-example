function checkId(req, res, next) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.locals.title = 'Ошибка запроса';
    res.locals.error = 'ID должен быть числом';
    res.status(406).json(res.locals);
    return;
  }

  next();
}

module.exports = checkId;
