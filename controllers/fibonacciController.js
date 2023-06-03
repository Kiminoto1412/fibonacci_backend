exports.nextFibonacci = async (req, res, next) => {
  try {
    const { index } = req.query;

    let result;
    function fibonacci(index) {
      if (index < 2) {
        return index;
      } else {
        return fibonacci(index - 1) + fibonacci(index - 2);
      }
    }

    if (index <= 0) {
      result = 0;
    } else {
      for (let i = 0; i < index; i++) {
        result = fibonacci(i);
      }
    }
    res.json({ message: "get next fibonacci successful", result });
  } catch (err) {
    next(err);
  }
};
