import React from 'react'
import ServiceCard from './ServiceCard'
import { ServiceData } from '@/data/servicespage-data'

interface Props{
    service: ServiceData[]
}

function ServiceGrid({service}:Props) {
  return (
    <div className='grid grid-cols-1 mt-4 gap-15'>
        {service.map((item) => (
          <ServiceCard key={item.id} data={item}/>
        ))}
    </div>
  )
}

export default ServiceGrid