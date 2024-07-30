var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
await conn.groupUpdateDescription(m.chat, text)
conn.reply(m.chat, `✅ *تم تحديث الوصف بنجاح*`, m,  )
} else return conn.reply(m.chat, ' *أدخل وصفًا جديدًا للمجموعة*\n\n*.setdesc* مرحبا بك في المجموعة يا صديقي', m, )

}
handler.help = ['وصف_الروم']
handler.tags = ['المطور_فقط']
handler.command = /^وصف_الروم$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
