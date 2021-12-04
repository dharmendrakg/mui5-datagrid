// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
export default function handler(req, res) {
  const data = fs.readFileSync("/intakes.json")
  // console.log(intakes)
  res.status(200).json({ name: 'John Doe' })
}
