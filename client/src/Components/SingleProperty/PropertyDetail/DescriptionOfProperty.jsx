import React from 'react'

function DescriptionOfProperty() {
  return (
    <div className=' container mx-auto  px-2 border-b-[1px] border-b-neutral-200 py-6'>
    <div className="flex flex-col gap-6 md:flex-row justify-start py-5">
    <div className="md:w-[20%]">
        <h3 className='font-serif'>Description</h3>
    </div>
    <div className="grid grid-cols-1 px-6 gap-6 md:w-[65%]">
      <p className=' font-serif'>
      The holiday apartment is located in an apartment house, built in 2000, renovated in 2015 and is in
       the typical country style furnished. The property is located in the center. The domicile is 
       also popular because of the view over the sea from the property and the sunny location. For 
       exclusive common use are available: sunbathing area and court.
      </p>
      <p className=' font-serif'>
      The entrance in your holiday apartment is located on the 2nd floor, is covered and leads 
      over an outside staircase. Living room (30 sqm) with 1 additional bed on couch/sofa, sitting area, 
      TV and (5 seats). Bedroom (20 sqm) with 2 single beds. Bedroom (20 sqm) with 1 double bed. Kitchen with
       (5 seats), gas stove, fridge (icebox), electric kettle and dryer. Bathroom (5 sqm)
       with shower and 1 sink. Separate toilet (5 sqm) with 1 sink and WC. Anteroom (10 sqm).
      </p>
      </div>
      </div>
    </div>
  )
}

export default DescriptionOfProperty