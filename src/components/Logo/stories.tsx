import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<LogoProps>

export const Default: Story = (args) => <Logo {...args} />
