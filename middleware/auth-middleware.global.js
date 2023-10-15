import { initializeAuthUser } from "~~/services/authService";

export default defineNuxtRouteMiddleware(async () => {
  if (process.client) {
    initializeAuthUser();
  }
});