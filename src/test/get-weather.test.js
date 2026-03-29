import { getWeather } from "../get-weather.js";

test("Weather API", async () => {
    const mockData = {
        address: 'Manila',
        temp: 30,
        conditions: 'Sunny'
    };

    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData)
        })
    );

    const data = await getWeather();

    expect(fetch).toHaveVeenCalled();
    expect(data).toEqual(mockData);
});