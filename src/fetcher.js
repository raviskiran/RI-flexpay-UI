const mockFetcher = (data) => {
    return new Promise((resolve) => setTimeout(resolve, 500, data))
}

export const fetcher = {
    get: (url) => mockFetcher(url),
    post: (url) => mockFetcher(url)
    // get: (url) => fetch({
    //     method: 'get',
    //     url
    // }),
    // post: (url) => fetch({
    //     method: 'post',
    //     url
    // }),
}