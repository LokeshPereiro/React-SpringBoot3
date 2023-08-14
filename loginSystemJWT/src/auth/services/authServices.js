export const authServices = (userLoginVali) => {
  return (
    userLoginVali.username === "admin" && userLoginVali.password === "1234"
  );
};
