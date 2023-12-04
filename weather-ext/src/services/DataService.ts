const apiKey = '323a805c82f4e444c4d6eb02dd3cc09f';

export interface CityWeather  {
    city: string;
    temperature: number;
    description: string,
    lat: number;
    lon: number;
}

export class DataService {

    public async getWeather(city: string): Promise<CityWeather>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
        const response = await fetch(url, {
            method: 'GET'
        })
        const parsedResponse = await response.json() as any;
        return {
            description: parsedResponse.weather[0].main,
            temperature: parsedResponse.main.temp,
            city: parsedResponse.name,
            lon: parsedResponse.coord.lon,
            lat: parsedResponse.coord.lat
        }
    }

    public async getWeatherExtended(city: string): Promise<string>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
        const response = await fetch(url, {
            method: 'GET'
        })
        const parsedResponse = await response.json();
        return JSON.stringify(parsedResponse)
    }
}