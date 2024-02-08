const GET = async (req, res) => {
  return res(`Hello, ${req.url}!`);
};

export default GET;
