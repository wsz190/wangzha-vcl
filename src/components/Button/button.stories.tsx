// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const handles = () =>{
   alert('Button')
}
const meta = {
    title: 'Button', //组件名称
    component: Button,
    tags:['autodocs'],
    argTypes: {
        onClick:{
            description:'点击事件'
        }
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { 
    name:'default',//故事命名
    args: {
        btnType:'default',
        children:'输入内容文本',
    },
    render: () => (<>
        <Button disabled onClick={handles}>disabled</Button>
        <Button btnType="danger" onClick={handles}>danger</Button>
        <Button btnType="primary" onClick={handles}>primary</Button>
        <Button btnType="link" href='http://www.baidu.com' onClick={handles}>link</Button>
        <Button btnType="default"  href='http://www.baidu.com' onClick={handles}>default</Button>
    </>),
};

export const Secondary: Story = {
    name:'使用方法',//故事命名
    args: {
        btnType:'primary',
        size:'small',
        children:'default',
    },
   
  };
