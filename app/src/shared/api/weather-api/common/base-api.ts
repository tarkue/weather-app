import { ApiError } from './error.js';

export class BaseApi {
  protected static baseUrl = 'https://api.openweathermap.org/data/2.5';

  protected static buildUrl(path: string) {
    return `${this.baseUrl}${path}`;
  }

  protected static buildUrlWithParams(
    path: string,
    params: Record<string, string>,
  ): URL {
    const url = new URL(this.buildUrl(path));

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });
    return url;
  }

  protected static async getResponse<T>(url: URL): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ApiError(response.statusText);
    }
    const answer = await response.json();
    return answer as T;
  }
}
