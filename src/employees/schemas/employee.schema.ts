import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({ required: true })
  ID: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  conscription: string;

  @Prop({ required: true })
  laborUnionMembership: boolean;

  @Prop({ required: true })
  children: Array<any>;

  @Prop({ required: true })
  dob: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  documents: Array<any>;

  @Prop({ required: true })
  rate: number;

  @Prop()
  course: number;

  @Prop({ required: true })
  post: string;

  @Prop({ required: true })
  covid: Array<any>;

  @Prop({ required: true })
  substitution: string;

  @Prop({ required: true })
  medicalExamination: Array<any>;

  @Prop()
  status: string;

  @Prop({ required: true })
  certificates: Array<any>;

  @Prop({ required: true })
  kumsID: string;

  @Prop()
  fired: boolean;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
