"use server"

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const vision = formData.get("vision");

  const message = `*New Inquiry: Aethelia Studio*\n\n` +
                  `👤 *Name:* ${name}\n` +
                  `✉️ *Email:* ${email}\n` +
                  `📱 *WA:* ${phone}\n` +
                  `🏛️ *Vision:* ${vision}`;

  const params = new URLSearchParams();
  params.append('target', '089670431969'); 
  params.append('message', message);
  params.append('countryCode', '62');

  try {
    const response = await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: {
        'Authorization': process.env.FONNTE_TOKEN || '', 
      },
      body: params,
    });

    const result = await response.json();
    if (result.status) {
      return { success: true };
    }
    return { success: false, error: result.reason };
  } catch (error) {
    console.error("Fonnte Error:", error);
    return { success: false, error: "Connection failed" };
  }
}