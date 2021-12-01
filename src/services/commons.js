import InvalidBodySchema from '../exceptions/InvalidBodySchema';
import InvalidID from '../exceptions/InvalidID';

import { isValidObjectId } from 'mongoose';

export const verifySchema = async (schema, body) => {
  try {
    await schema.validate(body, { abortEarly: false });
  } catch (error) {
    throw new InvalidBodySchema(error.errors);
  }
};

export const verifyID = async (id) => {
  const validID = isValidObjectId(id);
  if (!validID) {
    throw new InvalidID();
  }
};
