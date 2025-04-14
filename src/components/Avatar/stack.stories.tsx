import type { Meta, StoryObj } from '@storybook/react';

import { AvatarComponent } from '.';
import { AvatarStack } from './stack';

type avatarStackFilds = React.ComponentProps<typeof AvatarStack>;

const meta: Meta<typeof AvatarStack> = {
    title: "UI/Avatar/Stack",
    component: AvatarStack,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<avatarStackFilds>;

export const Default: Story = {

    render: () => (
        <AvatarStack size="lg" maxChildren={3}>
            <AvatarComponent src="https:/gravatar.com/avatar/1" fallback='NN' className='ring-2 ring-white' />
            <AvatarComponent src="https:/gravatar.com/avatar/1" fallback='NN' className='ring-2 ring-white' />
            <AvatarComponent src="https:/gravatar.com/avatar/1" fallback='NN' className='ring-2 ring-white' />
            <AvatarComponent src="https:/gravatar.com/avatar/1" fallback='NN' className='ring-2 ring-white' />
            <AvatarComponent src="https:/gravatar.com/avatar/1" fallback='NN' className='ring-2 ring-white' />
        </AvatarStack>
    )
};
