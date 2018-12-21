function filter(doc) {
  const result = doc._doc;

  delete result.username;

  for (const key in result) {
    if (key.startsWith("_")) {
      delete result[key];
    }
  }

  return result;
}

module.exports = filter;
