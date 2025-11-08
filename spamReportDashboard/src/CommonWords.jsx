export default function CommonWords(){
    const commonWords = [
    'Shall', 'Candy', 'Chemist'
];
const wordsList = commonWords.map(word => <li>{word}</li>);
return <ul>{wordsList}</ul>;
}
