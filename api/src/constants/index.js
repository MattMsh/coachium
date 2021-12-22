const matchStatus = {
    NEW: 1,
    IN_PROGRESS: 2,
    FINISHED: 3,
}

const userStatus = {
    ACTIVE: true,
    INACTIVE: false
}

const userRoles = {
    ADMIN: 'ADMIN',
    USER: 'USER',
}

const statusCategories = {
    SHARED: 'Shared',
    USER: 'User',
    PROJECT: 'Project',
    ITEM: 'Item',
}

const statuses = [
    {
        STATUS: 'New',
        CATEGORY_ID: 1,
    },
    {
        STATUS: 'Deleted',
        CATEGORY_ID: 1,
    },
    {
        STATUS: 'Registered',
        CATEGORY_ID: 2,
    },
    {
        STATUS: 'In progress',
        CATEGORY_ID: 3,
    },
    {
        STATUS: 'Finished',
        CATEGORY_ID: 3,
    },
    {
        STATUS: 'Archived',
        CATEGORY_ID: 3,
    },
    {
        STATUS: 'Approved',
        CATEGORY_ID: 4,
    },
    {
        STATUS: 'Rejected',
        CATEGORY_ID: 4,
    },
]

export {
    userStatus,
    matchStatus
}