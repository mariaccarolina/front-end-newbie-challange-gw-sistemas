import axios from 'axios';
export async function RegisterUserService({ url, body }) {
  try {
    const RegisterUser = await axios.post(url, body);
    const user = await RegisterUser.data;
    if (user) {
      return user;
    }
  } catch {
    return false;
  }
}
