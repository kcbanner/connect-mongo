export {}

declare module 'express-session' {
  interface SessionData {
    iat: number
    views: number | unknown
    session: string
  }
  interface Cookie {
    toJSON: () => Cookie
  }
}
