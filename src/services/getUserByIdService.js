import axios from 'axios';

export async function getUserByIdService(url) {
  try {
    const checkUser = await axios.get(url);
    const users = checkUser.data;
    return users;
  } catch {
    return false;
  }
}