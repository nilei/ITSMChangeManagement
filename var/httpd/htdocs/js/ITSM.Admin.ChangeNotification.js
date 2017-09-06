// --
// Copyright (C) 2001-2017 OTRS AG, http://otrs.com/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var ITSM = ITSM || {};
ITSM.Admin = ITSM.Admin || {};

/**
 * @namespace ITSM.Admin.ChangeNotification
 * @memberof ITSM.Admin
 * @author OTRS AG
 * @description
 *      This namespace contains the special module functions for the Change Notification
 */
ITSM.Admin.ChangeNotification = (function (TargetNS) {

    /**
     * @name Init
     * @memberof ITSM.Admin.ChangeNotification
     * @function
     * @description
            This function initializes the special module functions.
     */
    TargetNS.Init = function () {

        if (Core.Config.Get('OverviewResult')) {
            $('.NotificationDelete').bind('click', function (Event) {

                if (window.confirm(Core.Language.Translate('Do you really want to delete this notification?'))) {
                    window.location = $(this).attr('href');
                }

                // don't interfere with MasterAction
                Event.stopPropagation();
                Event.preventDefault();
                return false;
            });
        }

        if (Core.Config.Get('OverviewUpdate')) {
            if (ITSM.Agent && ITSM.Agent.ChangeManagement && ITSM.Agent.ChangeManagement.NotificationEvent) {
                ITSM.Agent.ChangeManagement.NotificationEvent.Init({
                    Localization: {
                        DeleteNotificationLanguageMsg: Core.Language.Translate('Do you really want to delete this notification language?')
                    }
                });
            }
        }
    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');
    return TargetNS;
}(ITSM.Admin.ChangeNotification || {}));