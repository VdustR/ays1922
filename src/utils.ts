import chunk from "lodash/chunk";
import flow from "lodash/flow";

export const formatLocationCode = (str: string) => str.replace(/[^\d]/g, "");
export const formatDisplayLocationCode = (str: string) =>
  flow(formatLocationCode, (str: string) =>
    chunk(str, 4)
      .map((arr) => arr.join(""))
      .join(" ")
  )(str);
