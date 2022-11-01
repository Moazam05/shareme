export const userQuery = function (userId) {
  const query = `*[_type == 'user' && _id == '${userId}']`;

  return query;
};
