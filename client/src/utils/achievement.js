export const addAchievement = (user, name, points) => {
    let userAchievements = [...user.achievements];

    let hasAchievement =    userAchievements.some(achievement => achievement.achievement === name);

    if (!hasAchievement) {
        userAchievements.push({
            achievement: name,
            points
        });
    }

    return userAchievements;;
}