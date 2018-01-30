import EntryView from '../views/EntryView.vue'
import ShowMnemonicView from '../views/ShowMnemonicView.vue'
import FirstTimeView from '../views/FirstTimeView.vue'
import MainMenuView from '../views/MainMenuView.vue'
import SettingsView from '../views/SettingsView.vue'
import IdentitiesView from '../views/IdentitiesView.vue'
import IdentityView from '../views/IdentityView.vue'
import NetworksView from '../views/NetworksView.vue'
import NetworkView from '../views/NetworkView.vue'
import PermissionsView from '../views/PermissionsView.vue'
import DomainPermissionView from '../views/DomainPermissionView.vue'
import BackupView from '../views/BackupView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'
import DestroyView from '../views/DestroyView.vue'
import ExportJsonView from '../views/ExportJsonView.vue'
import HistoryView from '../views/HistoryView.vue'

export const RouteNames = {
    ENTRY:'entry',
    SHOW_MNEMONIC:'showMnemonic',
    FIRST_TIME:'firstTime',
    MAIN_MENU:'mainMenu',
    SETTINGS:'settings',

    TRANSFER:'transfer',
    IDENTITIES:'identities',
    IDENTITY:'identity',
    PERMISSIONS:'permissions',
    DOMAIN_PERMISSIONS:'domainPermissions',
    HISTORY:'history',

    NETWORKS:'networks',
    NETWORK:'network',
    CHANGE_PASSWORD:'changePassword',
    BACKUP:'backup',
    EXPORT_JSON:'exportJson',
    DESTROY:'destroy',
};

const RouteViews = {
    [RouteNames.ENTRY]:EntryView,
    [RouteNames.SHOW_MNEMONIC]:ShowMnemonicView,
    [RouteNames.FIRST_TIME]:FirstTimeView,
    [RouteNames.MAIN_MENU]:MainMenuView,
    [RouteNames.SETTINGS]:SettingsView,

    [RouteNames.TRANSFER]:SettingsView,
    [RouteNames.IDENTITIES]:IdentitiesView,
    [RouteNames.IDENTITY]:IdentityView,
    [RouteNames.PERMISSIONS]:PermissionsView,
    [RouteNames.DOMAIN_PERMISSIONS]:DomainPermissionView,
    [RouteNames.HISTORY]:HistoryView,

    [RouteNames.NETWORKS]:NetworksView,
    [RouteNames.NETWORK]:NetworkView,
    [RouteNames.CHANGE_PASSWORD]:ChangePasswordView,
    [RouteNames.BACKUP]:BackupView,
    [RouteNames.EXPORT_JSON]:ExportJsonView,
    [RouteNames.DESTROY]:DestroyView,
};

export const RouteDepth = {
    [RouteNames.ENTRY]:-1,
    [RouteNames.SHOW_MNEMONIC]:1,
    [RouteNames.FIRST_TIME]:2,
    [RouteNames.MAIN_MENU]:0,
    [RouteNames.SETTINGS]:100,

    [RouteNames.TRANSFER]:1,
    [RouteNames.IDENTITIES]:1,
    [RouteNames.IDENTITY]:2,
    [RouteNames.PERMISSIONS]:1,
    [RouteNames.DOMAIN_PERMISSIONS]:2,
    [RouteNames.HISTORY]:1,

    [RouteNames.NETWORKS]:101,
    [RouteNames.NETWORK]:102,
    [RouteNames.CHANGE_PASSWORD]:101,
    [RouteNames.BACKUP]:101,
    [RouteNames.EXPORT_JSON]:102,
    [RouteNames.DESTROY]:101,
};

export class Routing {

    static builder(){
        const routeNames = Object.keys(RouteNames).map(key => RouteNames[key]);

        let routesBuilder = {};
        routeNames.map(routeName => {
            routesBuilder[routeName] = {
                path:routeName === RouteNames.ENTRY ? '' : '/'+routeName,
                name:routeName,
                component: RouteViews[routeName]
            }
        });

        return routesBuilder;
    }

    static routes(){
        return Object.keys(Routing.builder()).map(routeName => Routing.builder()[routeName]);
    }

    static isRestricted(routeName) {
        return routeName !== RouteNames.ENTRY
    }

}