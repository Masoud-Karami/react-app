import vl from "vega-lite-api";
export const viz = vl
  .markPpoint()
  .encode(vl.x().fieldQ("acceleration").vl.y().fieldQ("horsepower"));
