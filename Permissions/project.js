/*============================================
 * PROJECT PERMISSIONS
 * ============================================
 * THIS GROUP OF FUNCTIONS ARE DECOUPLED FROM THE ROUTES
 * ex. You can show "delete button" to users who "canDeleteProject"
 * - Simply use the canDeleteProject function in the view
 */

const { ROLE } = require("../data");

function canViewProject(user, project) {
  return user.role == ROLE.ADMIN || project.userId == user.id;
}

function scopeProjects(user, projects) {
  if (user.role == ROLE.ADMIN) return projects;
  return projects.filter((project) => project.userId == user.id);
}

function canDeleteProject(user, project) {
  return project.userId == user.id;
}

module.exports = {
  canViewProject,
  scopeProjects,
  canDeleteProject,
};
