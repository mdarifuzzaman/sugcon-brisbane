import type { Meta, StoryObj } from '@storybook/react';
import FormHeader from '../../../my-jss-app/src/components/controls/molecules/FormHeader';

const meta = {
    title: 'AFormHeader',
    component: FormHeader,  
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } satisfies Meta<typeof FormHeader>;
  
  export default meta;
  type Story = StoryObj<typeof FormHeader>;

  export const DefaultFormHeader : Story = {
    args: {
      title: "A sample form header",
      subTitle: "Subtitle of form header"
    }
  };
  