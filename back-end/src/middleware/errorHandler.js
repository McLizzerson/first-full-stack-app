const errorHandler = (err, req, res, next) => {
  if (err.name != "NotFoundError") {
    console.error(error);
    res.status(500).json({
      message:
        "An error occured on the server, please double check your request.",
    });
  }
};

export default errorHandler;
