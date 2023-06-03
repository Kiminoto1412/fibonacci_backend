const createError = require("../utils/createError");

exports.nextFibonacci = async (req, res, next) => {
  try {
    const { index, click } = req.query;

    let result;
    function fibonacci(index, click) {
      if (index === 0) {
        if (click === "increase") {
          return index + 1;
        } else {
          return index - 1;
        }
      } else if (index === 1) {
        if (click === "increase") {
          return index;
        } else {
          return index - 1;
        }
      } else {
        return fibonacci(index - 1, click) + fibonacci(index - 2, click);
      }
    }

    if (index < 0) {
      createError("Cannot be reduced by more than 0", 400);
    } else {
      for (let i = 0; i <= index; i++) {
        result = fibonacci(i, click);
      }
    }

    res.json({ message: "get next fibonacci successful", result });
  } catch (err) {
    next(err);
  }
};
