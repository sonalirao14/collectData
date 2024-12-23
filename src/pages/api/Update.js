export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json({ message: "Mock API works!" });
    } else {
      res.status(405).end("Method Not Allowed");
    }
  }
  