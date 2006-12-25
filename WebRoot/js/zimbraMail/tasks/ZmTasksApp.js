/*
 * ***** BEGIN LICENSE BLOCK *****
 * Version: ZPL 1.2
 *
 * The contents of this file are subject to the Zimbra Public License
 * Version 1.2 ("License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.zimbra.com/license
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is: Zimbra Collaboration Suite Web Client
 *
 * The Initial Developer of the Original Code is Zimbra, Inc.
 * Portions created by Zimbra are Copyright (C) 2005, 2006 Zimbra, Inc.
 * All Rights Reserved.
 *
 * Contributor(s):
 *
 * ***** END LICENSE BLOCK *****
 */

function ZmTasksApp(appCtxt, container) {

	ZmApp.call(this, ZmZimbraMail.TASKS_APP, appCtxt, container);
};

ZmTasksApp.prototype = new ZmApp;
ZmTasksApp.prototype.constructor = ZmTasksApp;

ZmTasksApp.prototype.toString =
function() {
	return "ZmTasksApp";
};

ZmTasksApp.prototype.launch =
function(callback) {
	var tc = this.getTaskListController();
	tc.show();

	if (callback)
		callback.run();
};

ZmTasksApp.prototype.activate =
function(active, view) {
	this._active = active;
};

ZmTasksApp.prototype.getTaskListController =
function() {
	if (!this._tasksController)
		this._tasksController = new ZmTaskListController(this._appCtxt, this._container, this);
	return this._tasksController;
};
