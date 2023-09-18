const commentRepository = require('../dal/commentRepository');

export const getComments = async (itemId) => {
    const databaseResult = await commentRepository.getComments(itemId);
    return databaseResult;
};

export const getOneComment = async (id) => {
    const databaseResult = await commentRepository.getComment(id);
    return databaseResult;
}

export const createComment = async (content, itemId, userId) => {
    const databaseResult = await commentRepository.createComment(content, itemId, userId);
    return databaseResult;
};

export const updateComment = async (content, itemId, userId, id) => {
    const databaseResult = await commentRepository.updateComment(content, itemId, userId, id);
    return databaseResult;
};

export const deleteComment = async (id) => {
    const databaseResult = await commentRepository.deleteComment(id);
    return databaseResult;
};


