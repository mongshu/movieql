const mongshu = {
    name: "Mongshu",
    age: 26,
    gender: "female"
};

const resolvers = {
    Query: {
        person: () => mongshu
    }
};

export default resolvers;