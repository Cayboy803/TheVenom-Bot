let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `اسم البوت؟`
  try {
    await conn.updateProfileName(text)
    m.reply('😃 تم تغيير الاسم بنجاح !')
  } catch (e) {
    console.log(e)
    throw `واجهت خطأ في تغيير الاسم`
  }
}
handler.help = ['اسم_البوت']
handler.tags = ['المطور_فقط']
handler.command = /^(اسم_البوت)$/i

handler.owner = true

export default handler
