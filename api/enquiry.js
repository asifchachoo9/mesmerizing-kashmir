import { db } from 'hatchable';
export const access = 'public';
export const methods = ['POST'];
export default async function(req,res){
 const b=req.body||{};
 const fields=['destination','guests','name','phone','email'];
 for(const f of fields){if(typeof b[f]!=='string'||!b[f].trim())return res.status(400).json({error:`${f} is required.`})}
 if(b.name.length>120||b.phone.length>50||b.email.length>180)return res.status(400).json({error:'Please check your details.'});
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email))return res.status(400).json({error:'Please enter a valid email address.'});
 const r=await db.query('INSERT INTO enquiries (destination,travel_date,guests,name,phone,email) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id',[b.destination,b.travel_date||null,b.guests,b.name.trim(),b.phone.trim(),b.email.trim().toLowerCase()]);
 res.json({ok:true,id:r.rows[0].id});
}