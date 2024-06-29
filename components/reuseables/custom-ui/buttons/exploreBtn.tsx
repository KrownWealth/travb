import React from 'react'
import { Button } from '@nextui-org/react'
import { cn } from '@/lib'
import { Europa_Bold } from '@/lib/fonts'



interface ButtonProps{
  bgColor: string
  textColor: string
  textSize: string
  width: string
  btnText: string

}
const ExploreButton: React.FC<ButtonProps> =({ bgColor, textColor, textSize, width, btnText }) => {
  return (
    <div>
       <Button className={cn('font-bold text-white rounded-none capitalize h-12', Europa_Bold
       )}
       style={{background: bgColor, color: textColor, fontSize: textSize, width: width}}>
        {btnText}</Button>
      
    </div>
  )
}

export default ExploreButton
