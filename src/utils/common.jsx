export const convertWordIntoSpanElements = (str) => {
  const chars = str.split("");
  const spanElements = chars.map((char, index) => {
    return <span key={index}>{char}</span>;
  });
  return <span className="word">{spanElements}</span>;
};
export const convertMultipleWordsIntoSpanElements = (str) => {
  const words = str.split(" ");
  const spanElements = words.map((word, index) => {
    return (
      <span key={index} className="word">
        {word}
      </span>
    );
  });
  return <span className="words">{spanElements}</span>;
};
