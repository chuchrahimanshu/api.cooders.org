interface APIErrorHandlerInterface {
  status: number;
  message: string;
  data?: any;
}

interface APIResponseHandlerInterface {
  status: number;
  message: string;
  data?: any;
}

interface SendEmailHandlerInterface {
  from: string;
  to: string;
  subject: string;
  html: string;
}
