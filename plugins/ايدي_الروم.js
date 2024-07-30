var handler = async (m, {conn, groupMetadata }) => {

conn.reply(m.chat, `${await groupMetadata.id}`,   )

}
handler.help = ['ايدي_الروم']
handler.tags = ['المطور_فقط']
handler.command = /^(ايدي_الروم)$/i

handler.group = true
handler.owner = true
export default handler  
