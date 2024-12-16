import WordCloud from "./wordcloud";

export default function App() {
  const data = [
    { text: "happy", value: 8 },
    { text: "joyful", value: 6 },
    { text: "exciting", value: 7 },
    { text: "awesome", value: 9 },
    { text: "fantastic", value: 8 },
    { text: "amazing", value: 9 },
    { text: "wonderful", value: 7 },
    { text: "positive", value: 20 },
    { text: "good", value: 8 },
    { text: "excellent", value: 9 },
    { text: "sad", value: 3 },
    { text: "angry", value: 4 },
    { text: "disappointed", value: 5 },
    { text: "horrible", value: 2 },
    { text: "terrible", value: 2 },
    { text: "frustrating", value: 3 },
    { text: "awful", value: 2 },
    { text: "unpleasant", value: 3 },
    { text: "boring", value: 4 },
    { text: "ordinary", value: 5 },
    { text: "satisfied", value: 7 },
    { text: "pleasing", value: 8 },
    { text: "delightful", value: 9 },
    { text: "cheerful", value: 8 },
    { text: "exuberant", value: 9 },
    { text: "grateful", value: 8 },
    { text: "uplifting", value: 7 },
    { text: "hopeful", value: 8 },
    { text: "inspiring", value: 9 },
    { text: "dismal", value: 3 },
    { text: "gloomy", value: 4 },
    { text: "dreary", value: 2 },
    { text: "miserable", value: 2 },
    { text: "unfortunate", value: 3 },
    { text: "blissful", value: 9 },
    { text: "radiant", value: 8 },
    { text: "pleasurable", value: 7 },
    { text: "exhilarating", value: 9 },
    { text: "magnificent", value: 10 },
    { text: "euphoric", value: 9 },
    { text: "jubilant", value: 8 },
    { text: "upbeat", value: 7 },
    { text: "sunny", value: 8 },
    { text: "heartwarming", value: 7 },
    { text: "content", value: 8 },
    { text: "satisfying", value: 9 },
    { text: "fulfilling", value: 8 },
    { text: "amused", value: 7 },
    { text: "jovial", value: 8 },
    { text: "festive", value: 9 },
    { text: "optimistic", value: 8 },
    { text: "vibrant", value: 9 },
    { text: "playful", value: 7 },
    { text: "contented", value: 8 },
    { text: "thrilled", value: 9 },
    { text: "gratified", value: 8 },
    { text: "overjoyed", value: 10 },
    { text: "serene", value: 8 },
    { text: "tranquil", value: 7 },
    { text: "ecstatic", value: 9 },
    { text: "exultant", value: 9 },
  ];

  const handleWordClick = (word) => {
    console.log("Word details:", word);
  };

  return (
    <WordCloud
      options={{
        words: data,
        verticalEnabled: true,
        minFont: 10,
        maxFont: 50,
        fontOffset: 0.9,
        width: 390,
        height: 744,
        fontFamily: "",
      }}
      onWordPress={handleWordClick}
    />
  );
}
