import Game from "./Game";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-medium">2048 Clone</h1>
      <Game />
      <p>Play using the arrow keys.</p>
    </div>
  );
}

export default App;
