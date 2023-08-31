import data from "../data.json";
import Element from "./Element";

export default function Summary() {
  return (
    <div className="flex flex-col p-6 sm:justify-center sm:items-center sm:w-1/2">
      <h2 className="text-black text-left mb-3 font-extrabold text-lg">
        Summary
      </h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {data.map((el, id) => {
          return (
            <Element
              key={id}
              category={el.category}
              score={el.score}
              icon={el.icon}
              color={el.color}
            />
          );
        })}
      </div>
      <button className="w-full text-white flex justify-center items-center bg-DGBlue rounded-3xl mt-5 p-3">
        Continue
      </button>
    </div>
  );
}
