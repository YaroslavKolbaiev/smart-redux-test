import client from './client';
import User from '../types';

export default function getUsers() {
  return client.get<User[]>('users');
}
