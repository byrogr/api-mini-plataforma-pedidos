const postUser = (req, res) => {
  const { body } = req;
  return res.status(200).json({
    data: body,
    failed: false
  });
};

module.exports = {
  postUser
};
