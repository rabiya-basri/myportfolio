require("dotenv").config();
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: { name, email, message },
    }),
  });

  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
    };
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Failed to send email." }),
    };
  }
};
