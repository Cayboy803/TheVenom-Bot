let handler = async (m, { conn, text }) => {
  if (!text) throw `هذا الامر يمكنك من خلاله ان تغير البيو الخاص ببوتك ♥ هذا الامر يشتغل فقط عند صاحب البوت اكتب هكذا \n*.setbio hello im nour bot*`
    try {
   await conn.updateProfileStatus(text).catch(_ => _)
   conn.reply(m.chat, 'تم تغيير Bio  البوت  بنجاح', m)
} catch {
      throw 'Yah Error.. :D'
    }
}
handler.help = ['بايو_البوت']
handler.tags = ['المطور_فقط']
handler.command = /^(بايو_البوت)$/i
handler.owner = true

export default handler
