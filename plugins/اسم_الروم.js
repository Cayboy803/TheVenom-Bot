var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (!text) return conn.reply(m.chat, 'هذا الأمر خاص بتغيير إسم المجموعة تكتب هكذا \n\n*.اسم_الروم* مملكة_بلاك_ديفل', m,  )
await conn.groupUpdateSubject(m.chat, text)
conn.reply(m.chat, `🚩 ${text ? `${text} *هو الاسم الجديد لهذه المجموعة*\n` : '*لم يعطوا اسما*'}`, m,  )
}
handler.help = ['اسم_الروم']
handler.tags = ['المطور_فقط']
handler.command = /^اسم_الروم$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
