import User from "~/server/models/user";

export default defineEventHandler(async (event) => {
  const context = event.context;
  const { id }: any = context.params;
  try {
    const user: any = await User.findOne({ _id: id });
  
    return user;
  } catch (error) {
    throw error;
  }
});
