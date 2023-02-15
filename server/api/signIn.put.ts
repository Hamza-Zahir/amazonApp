import User from "~/server/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const {JWT_SWNTENSCE} = useRuntimeConfig();
  let body = await readBody(event);


  const email = body.email;
  const password = body.password;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw createError({
        statusMessage: "A user with this email could not be found.",
        statusCode: 401,
      });
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw createError({
        statusMessage: "Wrong password!",
        statusCode: 401,
      });
    }
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      JWT_SWNTENSCE
    );
    return {
      token: token,
      userName: user.name,
      userId: user._id.toString(),
      location: user.location,
    };
  } catch (error) {
    throw error;
  }
});
