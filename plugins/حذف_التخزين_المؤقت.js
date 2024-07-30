import  { readdirSync, rmSync } from 'fs'

let handler = async (m, { conn, text }) => {
 const dir = './tmp'
 readdirSync(dir).forEach(f => rmSync(`${dir}/${f}`));
 let pesan = "The *tmp* folder has been cleaned"
 await m.reply(pesan)
}
handler.help = ['حذف_التخزين_المؤقت']
handler.tags = ['المطور_فقط']
handler.owner = true
handler.command = /^(حذف_التخزين_المؤقت)$/i

export default handler
