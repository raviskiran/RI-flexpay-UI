const mockFetcher = (data) => {
    console.log(data, 'data')
    return new Promise((resolve) => setTimeout(resolve, 2000, data))
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