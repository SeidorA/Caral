import type { Meta, StoryObj } from '@storybook/react';

import { AvatarComponent } from '.';

type AvatarProps = React.ComponentProps<typeof AvatarComponent>;

const meta: Meta<AvatarProps> = {
  title: "UI/Avatar",
  tags: ["autodocs"],
  component: AvatarComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["default", "sm", "md", "lg"],
      control: { type: "select" },
      description: "Tamaño del avatar. Permite seleccionar entre tamaños predefinidos como pequeño, mediano, grande o el tamaño por defecto.",
    },
    variant: {
      options: ["default", "info", "aprove", "warning", "danger", "indigo", "sakura", "outline", "ghost", "link"],
      control: { type: "select" },
      description: "Variante del avatar. Define el estilo visual del avatar, como colores o temas específicos.",
    },
    src: {
      control: { type: "text" },
      description: "Fuente de la imagen. Especifica la URL de la imagen que se mostrará en el avatar.",
    },
    fallback: {
      control: { type: "text" },
      description: "Texto de respaldo. Se muestra cuando no hay una imagen disponible en la fuente especificada.",
    }
  },
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    src: "https:/gravatar.com/avatar/1",
    fallback: "NN",
    size: "default",
  },
  render: (args) => <AvatarComponent {...args} />,
};

export const Fallback: Story = {
  args: {
    src: "",
    fallback: "NN",
    size: "default",
  },
  render: (args) => <AvatarComponent {...args} />,
};

