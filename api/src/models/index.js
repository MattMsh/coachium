import Match from './matchModel';
import MatchParticipant from './matchParticipantModel';
import MatchPosition from './matchPositionModel';
import Role from './roleModel';
import Team from './teamModel';
import TeamType from './teamTypeModel';
import UserData from './userDataModel';
import User from './userModel';
import UserToTeam from './userToTeamModel';


User.hasMany(UserData);
UserData.belongsTo(User);

Match.hasMany(MatchParticipant);
User.hasMany(MatchParticipant);
MatchPosition.hasMany(MatchParticipant);
Team.hasMany(MatchParticipant);
TeamType.hasMany(MatchParticipant);

User.hasMany(UserToTeam);
UserToTeam.belongsTo(User);
Team.hasMany(UserToTeam);
Role.hasMany(UserToTeam);
UserToTeam.belongsTo(Role);

Role.hasMany(MatchPosition);

export {
  Match,
  MatchParticipant,
  MatchPosition,
  Role,
  Team,
  TeamType,
  User,
  UserData,
  UserToTeam
};
