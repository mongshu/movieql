export const people = [
    {
        id: "0",
        name: "Mongshu",
        age: 26,
        gender: "female"
    },
    {
        id: "1",
        name: "Jisu",
        age: 21,
        gender: "female"
    },
    {
        id: "2",
        name: "Dalpong",
        age: 24,
        gender: "male"
    },
    {
        id: "3",
        name: "Zick",
        age: 24,
        gender: "female"
    },
    {
        id: "4",
        name: "moondung",
        age: 29,
        gender: "female"
    },
    {
        id: "5",
        name: "Potato",
        age: 25,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id);
    return filteredPeople[0];
}