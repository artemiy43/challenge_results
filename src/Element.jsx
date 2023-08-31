import reaction from "./images/icon-reaction.svg";
import memory from "./images/icon-memory.svg";
import verbal from "./images/icon-verbal.svg";
import visual from "./images/icon-visual.svg";
export default function Element({ category, score }) {
  return (
    <div
      className={
        "flex flex-row justify-between items-center p-3 rounded-xl bg-opacity-10 sm:w-full " +
        (category == "Reaction"
          ? "bg-LightRedd"
          : category == "Memory"
          ? "bg-OrangeYelloww"
          : category == "Verbal"
          ? "bg-GreenTeall"
          : "bg-CobaltBluee")
      }
    >
      <div className="flex flex-row justify-between">
        <img
          src={
            category == "Reaction"
              ? reaction
              : category == "Memory"
              ? memory
              : category == "Verbal"
              ? verbal
              : visual
          }
          alt="picture_icon"
          className="mr-4"
        />
        <p
          className={
            "text-lg " +
            (category == "Reaction"
              ? "text-LightRedd"
              : category == "Memory"
              ? "text-OrangeYelloww"
              : category == "Verbal"
              ? "text-GreenTeall"
              : "text-CobaltBluee")
          }
        >
          {category}
        </p>
      </div>
      <div className="flex flex-row">
        <p className="text-black text-opacity-50 text-lg">
          <span className="text-black font-HankenGrotesk text-lg font-semibold">
            {score}
          </span>{" "}
          / 100
        </p>
      </div>
    </div>
  );
}
