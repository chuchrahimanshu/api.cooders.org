import { transport } from "../config/index.config";

export async function sendEmail({
  from,
  html,
  subject,
  to,
}: SendEmailHandlerInterface) {
  return await transport.sendMail({
    from,
    to,
    subject,
    html,
  });
}
