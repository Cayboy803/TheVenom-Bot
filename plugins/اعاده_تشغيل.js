import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('🔁 جاري إعادة تشغيل البوت...\n المرجو الإنتظار  ')
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['اعاده_تشغيل']
handler.tags = ['المطور_فقط']
handler.command = ['اعاده_تشغيل'] 

handler.owner = true

export default handler
