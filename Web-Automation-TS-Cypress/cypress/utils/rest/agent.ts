import { UserRole } from '../global.util';
import { Rest } from '.';

export interface IUserOrganization {
  organization_id: number
  role: number
}

export interface IUserSettings {
  auto_accept: any | null
}

export interface IVoiceSettings {
  chanspy: boolean
  chanspied_on: boolean
}

export interface INewUser {
  active: boolean
  email: string
  first_name: string
  last_name: string
  login_pause: null
  login_strategy: string
  mail_capacity: number
  notification_settings: any
  password: string
  settings: IUserSettings
  two_factor_auth: null
  username: string
  voice_license: boolean
  voice_settings: IVoiceSettings
  __organizations: IUserOrganization[]
}
export interface IUser extends INewUser {
  id: number
}
/**
 * Agent creation
 * URL - https://atlas-dev-ec2-b.connectel.io:8001/user
 * Method - POST
 * Payload
{
 active: true,
 email: "a@gmail.com",
 first_name: "a",
 last_name: "b",
 login_pause: null,
 login_strategy: "local",
 mail_capacity: 5,
 notification_settings: {},
 password: "aaaaaa",
 settings: {auto_accept: null},
 two_factor_auth: null,
 username: "aaaaaaaaaa",
 voice_license: false,
 voice_settings: {chanspy: false, chanspied_on: false}
 __organizations:[{organization_id: 12, role: 4}]
 }
*/

export const createUser = () => {
  Rest(UserRole.ADMIN).then((token) => {
    console.log(token);
  });
};
