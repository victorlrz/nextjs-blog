export default (req, res) => {
  console.log("my secrets", JSON.stringify(process.env.secrets))
  res.status(200).json({ text: "hello world" });
};
