const createError = require("../utils/createError");

exports.nextFibonacci = async (req, res, next) => {
  try {
    const { index } = req.query;
    
    let result;
    function fibonacci(num) {
      if (num < 2) {
        return num;
      } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
      }
    }

    if (index <= 0) {
      createError("Cannot be reduced by more than 0", 400);
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
