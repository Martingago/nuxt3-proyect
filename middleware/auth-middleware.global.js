export default defineNuxtRouteMiddleware(async () => {
  const { $auth } = useNuxtApp();



  const user = $auth;

  if (!user) {
    console.log("Usuario no registrado:", user);
  } else {
    console.log("Estás logueado: ", user);
  }
});
