export default class Gate {
    constructor(user, permissions = new Set()) {
        this.user = user;
        this.permissions = permissions;
    }

    hasPermission(action) {
        return this.permissions.has(action);
    }

    setPermissions(permissions) {
        this.permissions = permissions;
    }
}

