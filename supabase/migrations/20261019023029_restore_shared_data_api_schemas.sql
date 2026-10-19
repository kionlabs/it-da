alter role authenticator
  set pgrst.db_schemas = 'public, storage, graphql_public, aice, healthcare, herihub, hrmm, motion_ai, itda';
notify pgrst, 'reload config';
