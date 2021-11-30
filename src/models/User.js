import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  linkedinId: { type: String, unique: true, required: true, minlength: 3, maxlength: 100 },
  firstName: { type: String, required: true, minlength: 3, maxlength: 100 },
  emailAddress: { type: String, unique: true, required: true, minlength: 3, maxlength: 300 },
  profilePicture: { type: String, required: true, minlength: 3, maxlength: 300 },
  assessments: [{ type: Schema.Types.ObjectId, ref: 'assessment', default: [] }],
});

const User = model('user', userSchema);

export default User;
