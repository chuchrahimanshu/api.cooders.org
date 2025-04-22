interface APIErrorHandlerInterface {
  status: number;
  message: string;
  success: boolean;
  data?: any;
}

interface APIResponseHandlerInterface {
  status: number;
  message: string;
  data?: any;
}
