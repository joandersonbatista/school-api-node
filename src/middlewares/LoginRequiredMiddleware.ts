import { Request, Response, NextFunction } from "express";

import { ILoginRequired } from "../useCases/users/loginRequired/ILoginRequired";

class LoginRequiredMiddleware {
  constructor(private loginRequired: ILoginRequired) {}

  async tokenRequired(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { authorization } = req.headers;

    if (authorization === undefined) {
      return res.status(401).json({ message: "Login required" });
    }

    const [, token] = authorization.split(" ");

    try {
      const data = await this.loginRequired.execute(token);

      req.userEmail = data.email;
      req.userId = data.id;

      return next();
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { LoginRequiredMiddleware };
