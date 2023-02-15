import User from "~/server/models/user";

export default defineEventHandler(async (event) => {
  
  const context = event.context;
  const { email }: any = context.params;

  try {
    const user = await User.findOne({email: email});
    return user;
  } catch (error) {
    throw error;
  }
});
