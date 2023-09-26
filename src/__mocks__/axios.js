const mockResponse={
    data:[
        {
            name:"faizaan"
        }
    ]
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}