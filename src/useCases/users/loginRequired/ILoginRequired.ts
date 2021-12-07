import { ILoginRequiredDTO } from "./ILoginRequiredDTO";

interface ILoginRequired {
  execute(token: string): Promise<ILoginRequiredDTO>
}

export { ILoginRequired };
