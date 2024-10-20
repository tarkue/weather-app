export interface GetWeatherByLngLatDTO {
  main: IMain;
  dt: number;
  weather: IWeather[];
  wind: IWind;
  sys: ISys;
  timezone: number;
  name: string;
}

interface ISys {
  sunrise: number;
  sunset: number;
}

interface IWeather {
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
}

interface IWind {
  speed: number;
}
