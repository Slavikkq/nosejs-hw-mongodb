<<<<<<< Updated upstream
export const notFoundHandler = (req, res) => {
    res.status(404).json({
        message: 'Route not found',
    });
=======
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Route not found',
  });
>>>>>>> Stashed changes
};