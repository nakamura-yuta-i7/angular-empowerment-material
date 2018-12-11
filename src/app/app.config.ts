import { ROLES } from "./app.roles";

export const config = {
  pages: [
    { key: "home",          depth:1, title: "PAGES.HOME",          divider: false, icon: "home", },
    { key: "people",        depth:1, title: "PAGES.PEOPLE",        divider: false, icon: "people", },
    { key: "organizations", depth:1, title: "PAGES.ORGANIZATIONS", divider: false, iconImgSrc: "/assets/ic_organization.svg" },
    { key: "corporations",  depth:2, title: "PAGES.CORPORATIONS",  divider: false, },
    { key: "departments",   depth:2, title: "PAGES.DEPARTMENTS",   divider: false, },
    { key: "statuses",      depth:2, title: "PAGES.STATUSES",      divider: false, },
    { key: "affairs",       depth:1, title: "PAGES.AFFAIRS",       divider: true,  permissionsOnly: [ROLES.GENAF], icon: "face", },
    { key: "hikarie-cards", depth:2, title: "PAGES.HIKARIE-CARDS", divider: false, permissionsOnly: [ROLES.GENAF], },
    { key: "cards",         depth:2, title: "PAGES.CARDS",         divider: false, permissionsOnly: [ROLES.GENAF], },
    { key: "system",        depth:1, title: "PAGES.SYSTEM",        divider: true,  permissionsOnly: [ROLES.ADMIN], icon: "settings", },
    { key: "acl",           depth:2, title: "PAGES.ACL",           divider: false, permissionsOnly: [ROLES.ADMIN], },
    { key: "background",    depth:2, title: "PAGES.BACKGROUND",    divider: false, permissionsOnly: [ROLES.ADMIN], },
  ],
};
