import { NavItem } from './universal.interface';

export interface MenuInfo {
  name: string;
  hasPage: boolean;
  redirect?: string;
  Page?: MenuInfo[];
}









