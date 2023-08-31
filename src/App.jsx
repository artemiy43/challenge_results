import "./App.css";
import Result from "./Result";
import Summary from "./Summary";

function App() {
  return (
    <main className="flex flex-col w-full h-screen font-HankenGrotesk sm:flex-row sm:w-[640px] sm:h-[535px] sm:shadow-lg">
      <Result />
      <Summary />
    </main>
  );
}

export default App;
