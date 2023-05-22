// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

const meta = {
    title: 'Menu', // 组件名称
    component: Menu, // 具体展示的是哪个 Component
    tags:['autodocs'], // 标签用于分类和组织代码库
    //定义了组件的 prop 类型及其对应的配置
    argTypes: {
        mode: { // mode 是 Menu 组件的必需 prop
            description: '可选垂直或水平',
            defaultValue: '垂直',
            required: true,
            type: 'string',
            control: 'select', // 使用 select 呈现属性值
            options: ['horizontal', 'vertical'] // 可选的 mode 属性值
        },
        // onSelect:,
    },
} satisfies Meta<typeof Menu>;
export default meta;

// 定义 Story 类型
type Story = StoryObj<typeof meta>;
// 主要 Story，用于演示 MenuItem 的基础用法
export const Primary: Story = { 
    name: '一级菜单', // Story 的名称
    args: {
        defaultIndex: '0', // 定义了一个默认值
        className: 'className', // 定义了一个 class 名称
    },
    render: (args) => ( // 渲染组件
        // 传递 args 参数到 Menu 组件
        <Menu {...args} onSelect={(index)=>{alert(index)}}> 
         {/* 执行 MenuItem 组件 */}
            <MenuItem>菜单1</MenuItem>
            <MenuItem disabled>菜单2</MenuItem>
            <MenuItem>菜单3</MenuItem>
            <MenuItem>菜单4</MenuItem>
        </Menu>
    ),
};

export const Submenu: Story = { 
    name: '二级菜单', // Story 的名称
    args: {
        defaultIndex: '0', // 定义了一个默认值
        className: 'className', // 定义了一个 class 名称
        
    },
    render: (args) => ( // 渲染组件
        // 传递 args 参数到 Menu 组件
        <Menu {...args}> 
         {/* 执行 MenuItem 组件 */}
            <MenuItem>菜单1</MenuItem>
            <MenuItem>菜单2</MenuItem>
            <SubMenu index='0' title='SubMenu'>
                <MenuItem>SubMenu-1</MenuItem>
                <MenuItem>SubMenu-2</MenuItem>
            </SubMenu>
            <MenuItem>菜单3</MenuItem>
            <MenuItem>菜单4</MenuItem>
        </Menu>
    ),
};

