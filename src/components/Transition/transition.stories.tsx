import React,{useState} from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import Transition from './transition';
const meta = {
    title: 'Transition', //组件名称
    component: Transition,
    tags:['autodocs'],

} satisfies Meta<typeof Transition>;

export default meta;
type Story = StoryObj<typeof meta>;


const ButtonWithHooks = () => {
    // 定义isPrimary状态，并设置默认值为false
    const [isPrimary, setIsPrimary] = useState(false);
    
    // 返回Button组件，并传递状态
    return   <>
        <Button  onClick={()=>{setIsPrimary(!isPrimary)}}>danger</Button>
        <Transition 
          in={isPrimary}
          timeout={300}
          animation="zoom-in-bottom"
          >
            <p>哈哈哈哈哈哈</p>
        </Transition>
    </>
  };
  




export const Primary: Story = { 
    name:'default',//故事命名
    args: {
        in:true,
        timeou:300,
        animation:"zoom-in-bottom"
    },
    render: () =><ButtonWithHooks/> ,
};
