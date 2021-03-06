// --
// Copyright (C) 2001-2017 OTRS AG, http://otrs.com/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var ITSM = ITSM || {};
ITSM.Agent = ITSM.Agent || {};
ITSM.Agent.ChangeManagement = ITSM.Agent.ChangeManagement || {};

/**
 * @namespace ITSM.Agent.ChangeManagement.TimeSlot
 * @memberof ITSM.Agent
 * @author OTRS AG
 * @description
 *      This namespace contains the special module functions for the Change TimeSlot.
 */
ITSM.Agent.ChangeManagement.TimeSlot = (function (TargetNS) {

    /**
     * @name Init
     * @memberof ITSM.Agent.ChangeManagement.TimeSlot
     * @function
     * @description
            This function initializes the special module functions.
     */
    TargetNS.Init = function () {

        $('#MoveTimeType').off('change.ITSMAgentChangeManagementTimeSlot').on('change.ITSMAgentChangeManagementTimeSlot', function() {
            Core.AJAX.FormUpdate($('#MoveTimeSlotForm'), 'AJAXUpdate', 'MoveTimeType', ['MoveTimeMinute', 'MoveTimeHour', 'MoveTimeDay', 'MoveTimeMonth', 'MoveTimeYear']);
            $('#AJAXLoaderMoveTimeDay, #AJAXLoaderMoveTimeMonth, #AJAXLoaderMoveTimeYear, #AJAXLoaderMoveTimeHour').removeClass('AJAXLoader');
        })

    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');
    return TargetNS;
}(ITSM.Agent.ChangeManagement.TimeSlot || {}));
