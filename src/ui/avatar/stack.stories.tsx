import type { Meta, StoryObj } from '@storybook/react';

import { AvatarStack } from './stack';
import { AvatarComponent } from '.';

type avatarStackFilds = React.ComponentProps<typeof AvatarStack>;

const meta: Meta<typeof AvatarStack> = {
    title: "UI/Avatar/stack",
    component: AvatarStack,
    tags: ["autodocs"],
};
 
export default meta;
type Story = StoryObj<avatarStackFilds>;

export const Default: Story = {
    
    render: () => (
        <AvatarStack size="lg" maxChildren={2}>  
            <AvatarComponent  src="https:/gravatar.com/avatar/1" />
            <AvatarComponent  src="https:/gravatar.com/avatar/1" />
            <AvatarComponent  src="https:/gravatar.com/avatar/1" />
            <AvatarComponent  src="https:/gravatar.com/avatar/1" />
            <AvatarComponent  src="https:/gravatar.com/avatar/1" />
        </AvatarStack>
    )
};
