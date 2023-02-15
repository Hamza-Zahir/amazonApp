import User from "~/server/models/user";
import jwt from "jsonwebtoken";
export default defineEventHandler(async (event) => {
  const {JWT_SWNTENSCE} = useRuntimeConfig();

  const { location } = await readBody(event);

  try {
    const authHeader: any = event.req.headers.authentication; 

    const { userId, email }: any = jwt.verify(
      authHeader,
      JWT_SWNTENSCE
    );
    const user: any = await User.findOne({ _id: userId, email });

      if (!user) {
        throw createError({
          statusCode: 404,
          statusMessage: "user not found"
        });
      }
      user.location = location ;
      user.save();

    return user;
  } catch (error) {
    throw error;
  }
});
