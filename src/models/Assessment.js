import { Schema, model } from 'mongoose';

const assessmentSchema = new Schema(
  {
    isAnonymous: { type: Boolean, default: false },
    grade1: { type: Number, required: true, min: 0, max: 10 },
    grade2: { type: Number, required: true, min: 0, max: 10 },
    grade3: { type: Number, required: true, min: 0, max: 10 },
    grade4: { type: Number, required: true, min: 0, max: 10 },
    grade5: { type: Number, required: true, min: 0, max: 10 },
    grade6: { type: Number, required: true, min: 0, max: 10 },
    grade7: { type: Number, required: true, min: 0, max: 10 },
    comment: { type: String, maxlength: 1000 },
    reply: { type: String, maxlength: 1000 },
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    company: { type: Schema.Types.ObjectId, ref: 'company', required: true },
  },
  {
    timestamps: true,
  }
);

const Assessment = model('assessment', assessmentSchema);

export default Assessment;
