import Eris from "./index.js";

export default function(token, options) {
  return new Eris.Client(token, options);
}

export const {
  Base,
  Bucket,
  Call,
  CategoryChannel,
  Channel,
  Client,
  Collection,
  Constants,
  DiscordHTTPError,
  DiscordRESTError,
  ExtendedUser,
  GroupChannel,
  Guild,
  GuildChannel,
  GuildPreview,
  Invite,
  Member,
  Message,
  NewsChannel,
  Permission,
  PermissionOverwrite,
  PrivateChannel,
  RequestHandler,
  Role,
  SequentialBucket,
  Shard,
  SharedStream,
  StoreChannel,
  TextChannel,
  UnavailableGuild,
  User,
  VERSION,
} = Eris;
