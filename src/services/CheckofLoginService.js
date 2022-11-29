import axios from 'axios';

export async function CheckofLoginService({ url, body }) {
  try {
    const checkUser = await axios.post(url, body);
    const user = await checkUser.data;
    return user;
  } catch {
    return false;
  }
}
