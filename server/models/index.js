const User = require("./User");
const Project = require("./Projects");
const Job = require("./Jobs");
const Profile = require("./Profile")
User.hasOne(Profile, {
    foreignKey: "userId"
})
Profile.belongsTo(User, {
    foreignKey: "userId"
})
User.hasMany(Project, {
    foreignKey: "userId"
})
Project.belongsTo(User, {
    foreignKey: "userId"
})
module.exports = {User, Job, Project, Profile}