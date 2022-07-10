import { RegisteredUser } from '../users.model';

export type registeredDataDto = RegisteredUser & { password: string };
