import User from './user';
import Assignment from './assignment';
import UserAssignment from './userassignment';

User.belongsToMany(Assignment,
  {
    through: UserAssignment,
    foreignKey: 'user_id'
  }
);

Assignment.belongsToMany(User,
  {
    through: UserAssignment,
    foreignKey: 'assignment_id'
  }
);

export { User, Assignment, UserAssignment };