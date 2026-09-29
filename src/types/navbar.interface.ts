export interface NavActionsProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}
export type NavLinksProps = {
  onClick?: () => void;
  className?: string;
};

export type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};
