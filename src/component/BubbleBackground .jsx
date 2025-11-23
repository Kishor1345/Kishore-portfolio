

const BubbleBackground = () => {
  return (
    <ul className="bubbles">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
};

export default BubbleBackground;
