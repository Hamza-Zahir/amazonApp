import bcrypt from "bcryptjs";
import User from "~~/server/models/user";
import { userSchema } from "~~/server/validation";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (e) => {
  const {JWT_SWNTENSCE} = useRuntimeConfig();

  let body = await readBody(e);
  // let { error } = await userSchema.validate(body);
  let { error } = await userSchema.validateAsync(body);

  if (error) {
    throw createError({
      message: error.statusMessage.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(body.password, 12);

    body = { ...body, password: hashedPassword };
    const userRespons = await User.create(body);
    const token = jwt.sign(
      {
        email: userRespons.email,
        userId: userRespons._id.toString(),
      },
      JWT_SWNTENSCE
    );

    return {
      token: token,
      userId: userRespons._id.toString(),
      userName: userRespons.name,
    };
  } catch (error: any) {
    throw error;
  }
});
