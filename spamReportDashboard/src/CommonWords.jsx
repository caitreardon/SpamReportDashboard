export default function CommonWords(){
    const commonWords = [
    'Some Words', 'Something', 'Something else', ' Pretend data', 'Fake words'
];
const wordsList = commonWords.map(word => <li>{word}</li>);
return <ul>{wordsList}</ul>;
}
