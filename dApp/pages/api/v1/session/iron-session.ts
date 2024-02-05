
export const ironOptions = {
  cookieName: 'siwe',
  password: '----------------------------secret----------------------------',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  },
}
