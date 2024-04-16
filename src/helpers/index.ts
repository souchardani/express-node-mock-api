import crypto from "crypto";

const SECRET = "TUTORIAL-REST-API";
export const random = () => crypto.randomBytes(128).toString("base64");

export const authenthication = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
