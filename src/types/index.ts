export interface NavItem {
  label: string;
  href: string;
  submenu?: Array<{
    label: string;
    href: string;
  }>;
}