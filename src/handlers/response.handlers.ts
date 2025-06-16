class APIResponse implements APIResponseInterface {
  statusCode: number;
  message: string;
  data?: Record<string, any> | null;

  constructor(
    statusCode: number,
    message: string,
    data: Record<string, any> | null = null
  ) {
    this.statusCode = statusCode;
    this.message = message;
    if (data) {
      this.data = data;
    }
  }

  static create(
    statusCode: number,
    message: string,
    data: Record<string, any> | null = null
  ): APIResponse {
    return new APIResponse(statusCode, message, data);
  }
}

export { APIResponse };
