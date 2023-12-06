const User = require("./User");
const Project = require("./Projects");
const Job = require("./Jobs");
const UserProfile = require("./UserProfile")

User.hasOne(UserProfile);
UserProfile.belongsTo(User);
User.hasMany(Project, {
    foreignKey: "userId"
})
Project.belongsTo(User, {
    foreignKey: "userId"
})
module.exports = {User, Job, Project, UserProfile}