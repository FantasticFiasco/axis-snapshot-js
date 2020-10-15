import got, { OptionsOfTextResponseBody, RequestError as GotRequestError } from 'got';
import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';
import { Connection } from '../Connection';
import { RequestError, UnauthorizationError } from '../errors';

export abstract class Request {
  protected constructor(protected readonly connection: Connection) {}

  protected async get(url: string): Promise<string> {
    const options: OptionsOfTextResponseBody = {
      username: this.connection.username,
      password: this.connection.password,
    };

    if (this.connection.options?.agent instanceof HttpAgent) {
      options.agent = {
        http: this.connection.options?.agent,
      };
    }

    if (this.connection.options?.agent instanceof HttpsAgent) {
      options.agent = {
        https: this.connection.options?.agent,
      };
    }

    try {
      const resp = await got.get(url, options);
      return resp.body;
    } catch (error) {
      this.handleError(error);

      // Fallback
      throw error;
    }
  }

  private handleError(error: Error) {
    if (error instanceof GotRequestError) {
      if (error.code === '401') {
        throw new UnauthorizationError();
      }

      throw new RequestError(error.message, error.code);
    }
  }
}
