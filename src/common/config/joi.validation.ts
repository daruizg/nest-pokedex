/* eslint-disable @typescript-eslint/naming-convention */
import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB_CONNECTION_STRING: Joi.required(),
  PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(7),
});
