import {Connection} from "mongoose";

declare global{
  // eslint-disable-next-line no-var
  var mongoose: {
    promise:Promise<Connection> | null;
    conn:Connection | null;
  }
}

export {}