const User = require("./User");
const Project = require("./Projects");
const Job = require("./Jobs");

Project.belongsTo(User, {
    foreignKey: 'userId'
})
Job.belongsTo(User, {
    foreignKey: 'userId'
});
Job.belongsTo(Project, {
    foreignKey: "projectId"
})

module.exports = {User, Job, Project}