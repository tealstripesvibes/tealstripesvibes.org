import type { Meta, StoryObj } from "@storybook/react";
import { MainLogo as LogoComponent } from "@core/components/layout/components/logo/MainLogo";

const meta: Meta<typeof LogoComponent> = {
  title: "Brand/Logo/Button",
  component: LogoComponent,
};

export default meta;
type Story = StoryObj<typeof LogoComponent>;

export const Button: Story = {};
