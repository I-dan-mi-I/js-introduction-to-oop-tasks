// BEGIN

/**
 * @param {object} user1
 * @param {object} user2
 */
export const getMutualFriends = (user1, user2) => {
  if (!Object.hasOwn(user1, 'getFriends') || !Object.hasOwn(user2, 'getFriends'))
    return {};

  const user1Friends = user1.getFriends();
  const user2Friends = user2.getFriends();

  return user1Friends.filter(u1 => user2Friends.some(u2 => u1.id === u2.id));
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});