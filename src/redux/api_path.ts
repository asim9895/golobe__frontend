export const API_URL = "http://192.168.1.5:7500/mesmah/api";

export const user_routes = {
  register_user: "/user/register-user",
  login_user: "/user/login-user",
  verify_mfa_code: "/user/verify-mfa-code",
  reset_password: "/user/reset-password",
  generate_forgot_password_code: "/user/generate-forgot-password-code",
  verify_forgot_password_code: "/user/verify-forgot-password-code",
};

export const genre_routes = {
  all_active_genres: "/master/genre/all-active-genres",
};

export const user_genre_routes = {
  create_bulk_user_genres: "/user-genre/create-bulk-user-genre",
};
