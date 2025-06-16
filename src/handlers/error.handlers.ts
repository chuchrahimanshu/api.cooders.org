interface APIErrorInterface {
  statusCode: number;
  message: string;
  data?: Record<string, any> | null;
  stack?: string;
}

class APIError extends Error implements APIErrorInterface {
  readonly statusCode: number;
  readonly data?: Record<string, any> | null;

  constructor(
    statusCode: number,
    message: string,
    data: Record<string, any> | null = null,
    stack?: string
  ) {
    super(message);

    this.name = "APIError";
    this.statusCode = statusCode;
    if (data) {
      this.data = data;
    }
    this.stack = stack || new Error().stack;
    Object.setPrototypeOf(this, APIError.prototype);
  }

  static create(
    statusCode: number,
    message: string,
    data: Record<string, any> | null = null,
    stack?: string
  ): APIError {
    return new APIError(statusCode, message, data, stack);
  }
}

export { APIError };
