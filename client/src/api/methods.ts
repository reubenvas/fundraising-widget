const baseUrl = 'http://localhost:8080/';

export const get = (path: string): Promise<string> => fetch(baseUrl + path)
    .then((res) => res.json());

export const post = (path: string, data: {}): Promise<string> => fetch(baseUrl + path, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then((res) => res.json());
