import reactivate from './src/index.ts';

interface IDog {
    name:string,
    gender:string
}

let dog = reactivate({
    name: 'Peter',
    gender: 'male'
}, (key: string) => {
    console.log(key + ' changed!');
}) as IDog;

dog.name = 'Jimmy';
