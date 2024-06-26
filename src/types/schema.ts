// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Document } from "@blockflow-labs/utils";

export class User {
  static entity = "User";
  static schema = {
    id: { type: "String", index: true },
    points: "string",
    swapsTxId: ["string"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
  };
}

import { String, Array } from "@blockflow-labs/utils";

export interface IUser extends Document {
  id: string;
  points: string;
  swapsTxId: [string];
  blocknumber: String;
  entityId: String;
  chainId: String;
}
