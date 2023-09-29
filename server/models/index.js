const User = require("./User");
const Project = require("./Projects");
const Job = require("./Jobs");

User.hasMany(Project, {
    foreignKey: "userId"
})
Project.belongsTo(User, {
    foreignKey: "userId"
})
module.exports = {User, Job, Project}