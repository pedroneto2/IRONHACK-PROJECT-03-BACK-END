import { Schema, model } from 'mongoose';

const companySchema = new Schema({
  name: { type: String, unique: true, required: true, minlength: 3, maxlength: 150 },
  companyLogo: { type: String, unique: true, maxlength: 300 },
  assessments: [{ type: Schema.Types.ObjectId, ref: 'assessment', default: [] }], // ONE TO MANY
});

const Company = model('company', companySchema);

export default Company;
