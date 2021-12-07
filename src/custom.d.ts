declare namespace Express {
  export interface Request {
    userId?: number,
    userPassword?: string,
    userEmail?: string,
  }
}