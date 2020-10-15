/**
 * Error thrown when a request fail.
 */
export class RequestError extends Error {
  constructor(
    /**
     * The error message.
     */
    message: string | undefined,
    /**
     * The HTTP status code.
     */
    readonly statusCode: string | undefined
  ) {
    super(message);
  }
}
