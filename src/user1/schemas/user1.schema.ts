import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Address } from "./address.schema";

@Schema()
export class User1 extends Document{
    @Prop()
    'name': string;

    @Prop({type : Address})
    'address': Address;
}

export const User1Schema = SchemaFactory.createForClass(User1)
