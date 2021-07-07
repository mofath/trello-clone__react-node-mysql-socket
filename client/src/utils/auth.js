const authLists = {
    done: 'done',
    paid: 'paid',
};

export const allowedToDrop = (listId, role) => {
    if (!authLists[listId]) return false;
    return role !== 'client';
};
