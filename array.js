module.exports = function generateArray(size = 50) {
  return new Array(size).fill(0).map(() => Math.floor(Math.random() * 100));
};
