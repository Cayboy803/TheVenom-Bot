let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;

let handler = async (m, { conn, text }) => {
  let [_, code] = text.match(linkRegex) || [];
  if (!code) throw "*مثال*\n*.ادخل (رابط المجموعة)*";
  try {
    const res = await conn.groupAcceptInvite(code);
  } catch (e) {
    throw `Error`;
  } finally {
    m.reply(
      `تم الانضمام بنجاح لـــ  : *[ ${(await conn.groupGetInviteInfo(code)).id} ]*`,
    );
  }
};
handler.help = ["ادخل"];
handler.tags = ["المطور_فقط"];
handler.command = ["ادخل"];
handler.premium = false;
export default handler ;
