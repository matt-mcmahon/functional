import { sign } from "@mwm/sign";

export const signatures = [
  { "map :: (a => b) => as => bs": 1 },
  { "map ::             as => bs": 1 },
];

export const implementation = (mapAB) => (as) => as.map(mapAB);

export const map = sign(signatures, implementation);
