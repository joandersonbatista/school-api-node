declare namespace Express {
  export interface Request {
    userId?: number | string,
    userPassword?: string,
    userEmail?: string,
  }
}