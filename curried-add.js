function curriedAdd(total = 0) {
  if (total === 0 && arguments.length === 0) return 0;
  return function addNext(num) {
    if (num === undefined) return total;
    total += num;
    return addNext;
  };
}

module.exports = { curriedAdd };
