export interface APIErrorHandlerInterface {
  status: number;
  message: string;
  data?: any;
}

export interface APIResponseHandlerInterface {
  status: number;
  message: string;
  data?: any;
}

export interface SendEmailHandlerInterface {
  from: string;
  to: string;
  subject: string;
  html: string;
}
