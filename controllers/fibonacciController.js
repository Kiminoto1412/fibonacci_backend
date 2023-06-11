exports.nextFibonacci = async (req, res, next) => {
  try {
    const { index } = req.query;

    const findNextFibonacci = (index) => {
      if (index <= 0) {
        return 0;
      } else if (index === 1) {
        return 1;
      } else {
        let a = 0;
        let b = 1;
        let next;

        for (let i = 2; i <= index; i++) {
          next = a + b;
          a = b;
          b = next;
        }
        return next;
      }
    };

    res.json({
      message: 'get next fibonacci successful',
      result: findNextFibonacci(index),
    });
  } catch (err) {
    next(err);
  }
};
