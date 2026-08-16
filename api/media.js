import { storage } from "hatchable";
export const access = "public";
export const methods = ["GET"];
export default async function(req,res){
  const key=String(req.query?.key||"").replace(/^\/+/,"");
  if(!key || !/^images\/[a-z0-9/_-]+\.(jpg|jpeg|webp)$/i.test(key)) return res.status(400).send("Invalid image key");
  try{const item=await storage.get(key);if(!item?.buffer)return res.status(404).send("Image not found");res.setHeader("Content-Type",item.contentType||"image/jpeg");res.setHeader("Cache-Control","public, max-age=31536000, immutable");return res.send(item.buffer)}catch(e){return res.status(404).send("Image not found")}
}