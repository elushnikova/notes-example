function setupDateGetter(columnName) {
  return function formatDate() {
    const locale = 'ru-RU';
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return this.getDataValue(columnName).toLocaleString(locale, options);
  };
}

module.exports = setupDateGetter;
