import fs from 'fs'
import path from 'path'

const filePath = path.resolve('.', 'assets/lana-kosogova-resume.pdf')
const imageBuffer = fs.readFileSync(filePath)

export default function(req, res) {
  res.setHeader('Content-Type', 'application/pdf')
  res.send(imageBuffer)
}