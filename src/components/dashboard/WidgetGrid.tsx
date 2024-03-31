'use client'

import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'


export const WidgetGrid = () => {

  const isCart = useAppSelector(state => state.counter.count)

  return (
    <div className="flex flex-wrap p-2">
    <SimpleWidget 
    title={`${isCart}`}
    subTitle='Contador'
    label='Contador'
    href={"/dashboard/counter"}
    icon={<IoCartOutline size={70} className="text-blue-600"/>}
    />
  </div>
  )
}
