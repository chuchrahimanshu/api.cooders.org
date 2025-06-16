interface APIErrorInterface {
  statusCode: number;
  message: string;
  data?: Record<string, any> | null;
  stack?: string;
}

interface APIResponseInterface {
  statusCode: number;
  message: string;
  data?: Record<string, any> | null;
}
