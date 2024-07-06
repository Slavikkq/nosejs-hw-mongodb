import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: false },
    photo: { type: String },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
<<<<<<< Updated upstream
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
=======
    photo: { type: String },
    userId: { type: Schema.ObjectId, required: false },
>>>>>>> Stashed changes
  },
  { timestamps: true, versionKey: false }
);

export const ContactsCollection = model('contacts', contactSchema);