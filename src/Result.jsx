export default function Result() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-LSblue to-LRblue justify-center items-center font-HankenGrotesk rounded-b-3xl sm:w-1/2 sm:h-full sm:rounded-3xl">
      <h2 className="text-white my-4 text-lg font-medium text-opacity-50">
        Your Result
      </h2>
      <div className="w-36 h-36 rounded-full bg-gradient-to-b from-Violetblue to-Persianblue mb-4 flex flex-col justify-center items-center text-center">
        <div className="text-white text-5xl font-HankenGrotesk">76</div>
        <div className="text-white text-opacity-40">of 100</div>
      </div>
      <div className="text-white text-2xl my-2">Great</div>
      <div className="text-white leading-5 w-fit mb-8 text-opacity-60 px-12">
        Your score higher than 65% of the people who have taken these tests.
      </div>
    </div>
  );
}
