import React from "react";

import { ReceivedHenkensView } from "./ViewReceivedHenkens";

export const TemplateUserPage: React.VFC<{
  user: {
    id: string;
    alias: string;
    displayName: string;
    avatar: string;
    receivedHenkens: {
      totalCount: number;
      pageInfo: { hasNextPage: boolean; endCursor: string; } | null;
      nodes: {
        id: string;
        comment: string;
        postedBy: { id: string; alias: string; displayName: string; avatar: string; };
        answer: { type: "right" | "wrong"; comment: string; } | null;
        content:
          | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
          | { type: "bookseries"; content: { id: string; title: string; }; }
          | { type: "author"; content: { id: string; name: string; }; };
      }[];
    };
  };
}> = ({ user }) => {
  return (
    <>
      {"receivedHenkens" in user && <ReceivedHenkensView user={user} />}
    </>
  );
};
