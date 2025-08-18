import * as yup from "yup";

export const index = yup.object({
  name: yup.string().min(2).max(25).required("Who am I chatting with?"),
  email: yup.string().email().required("I can’t reply without your email!"),
  message: yup.string().required("Say hi! Don’t be shy."),
});
