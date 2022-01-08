const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Med Amine",
          last: "fh",
        },

        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "medaminefh",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockReturnValue(mockResponse),
};
