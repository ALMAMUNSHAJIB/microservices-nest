import { AbstractDocument } from "@app/common";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false, timestamps: true})
export class Order extends AbstractDocument  {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  phoneNumber: string;
 }

export const OrderSchema = SchemaFactory.createForClass(Order);