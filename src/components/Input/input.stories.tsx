import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';
const meta = {
    title: 'Input', //组件名称
    component: Input,
    tags:['autodocs'],
    
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name:'默认input',
    args: {
        size:'lg',
        placeholder:'default'
    },
};
export const Disabled: Story = {
    name:'被禁用的input',
    args: {
        size:'lg',
        placeholder:'default'
    },
};
export const Icon: Story = {
    name:'带图标的input',
    args: {
        size:'sm',
        placeholder:"input with icon",
        icon:'search',
    },
};

export const sizeInput: Story = {
    name:'带图标的input',
    args: {
        placeholder:"input small size",
    },
    render: () => (<>
        <Input style={{width: '300px'}}  size='sm' {...Default.args}/>
        <Input  style={{width: '300px'}} size='lg'{...Default.args} />

    </>)
};
export const pandInput: Story = {
    name:'组合追加 input prepend | google',
    args: {
        placeholder:"input prepend | google",
    },
    render: () => (<>
        <Input defaultValue="prepend text" prepend="https://"/>
        <Input defaultValue="google" append=".com"/>

    </>)
  
};



