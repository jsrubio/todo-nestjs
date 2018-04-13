import { Schema } from 'mongoose';

export class BaseSchema extends Schema {
  constructor(schema: any) {
    super(schema, {
      toJSON: {
        transform: (doc, ret, options) => {
          ret.id = ret._id;
          delete ret._id;
          delete ret.__v;
        },
      },
    });
  }
}
