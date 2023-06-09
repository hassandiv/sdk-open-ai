// import fetch from "isomorphic-unfetch";

//4
type Config = {
  apiKey: string;
  baseUrl?: string;
};

//1
export abstract class Base {
  //2 define private variables below
  private apiKey: string;
  private baseUrl: string;

  //3
  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://openai80.p.rapidapi.com/";
  }

  //below is our method which is final step 5
  //options?: RequestInit dont work with our POST request
  protected invoke<T>(endpoint: string, options?: any): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": this.apiKey,
      "X-RapidAPI-Host": "openai80.p.rapidapi.com",
    };

    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    });
  }
}
