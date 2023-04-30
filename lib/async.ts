export const delay = (time) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(1), time);
    });

// used to slow down API calls by delaying network requests