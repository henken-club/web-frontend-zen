import {
  mutationCreateHenkenFormCreateHenken,
  queryCreateHenkenFormSearchContent,
  queryCreateHenkenFormSearchUser,
} from "./CreateHenkenForm";
import { queryGlobalNavNotifications } from "./GlobalNav";
import { mutationAnswerHenken, queryAllHenkenPages, queryHenkenPage } from "./HenkenPage";
import { mutationRegisterUser, queryIsAliasUnique } from "./RegisterUserForm";
import { queryAllUserPages, querySendHenkensUserPage, queryUserPage } from "./UserPage";
import { queryFetchViewer } from "./Viewer";

export const handlers = [
  // Viewer
  queryFetchViewer,

  // Henken Page
  queryAllHenkenPages,
  queryHenkenPage,
  mutationAnswerHenken,

  // User Page
  queryAllUserPages,
  queryUserPage,
  querySendHenkensUserPage,

  // GlobalNav
  queryGlobalNavNotifications,

  // Register User
  mutationRegisterUser,
  queryIsAliasUnique,

  // CreateHenkenForm
  mutationCreateHenkenFormCreateHenken,
  queryCreateHenkenFormSearchContent,
  queryCreateHenkenFormSearchUser,
];
