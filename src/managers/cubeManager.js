const uniqid = require(`uniqid`);
const cubes = [
    {
        id: `asdasdasd`,
        name: `Mirror cube`,
        description: `Nice cube`,
        imageUrl: `data:image/jpeg;base64,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`,
        difficultyLevel : 3,
    }
];


exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
};