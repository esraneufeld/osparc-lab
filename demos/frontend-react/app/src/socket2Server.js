import openSocket from 'socket.io-client';
const socket = openSocket('http://172.16.9.47:6002');
export { socket };
