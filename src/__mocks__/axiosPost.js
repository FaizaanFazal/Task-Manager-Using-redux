const mockResponse={
    status:201,
    data:[
        {
            id: 11,
            name: "Jazba"
        }
    ]
}

export default {
    post: jest.fn().mockResolvedValue(mockResponse)
}
