import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";

import { PageContainer } from "~/components/layouts/Default";
import { View } from ".";

export default {
  title: "HenkenPage",
  component: View,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
} as Meta;

type StoryProps = ComponentProps<typeof View>;

export const Primary: Story<StoryProps> = ({ ...props }) => {
  return <View {...props} />;
};
Primary.args = {
  henken: {
    id: "1",
    comment: "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
    postedBy: {
      id: "1",
      alias: "user_1",
      displayName: "User 1",
      avatar: "/.mock/avatar_1.png",
    },
    postsTo: {
      id: "2",
      alias: "user_2",
      displayName: "User 2",
      avatar: "/.mock/avatar_2.png",
    },
    content: {
      type: "book",
      content: {
        id: "book_1",
        title: "アー",
        cover: "/.mock/bookcover_1.jpg",
      },
    },
  },
};
