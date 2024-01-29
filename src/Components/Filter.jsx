import React from 'react'

function Filter(props) {

  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler (title) {
    setCategory (title);
    console.log (title);
  }

  return (
    <div className='flex justify-center w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4'>
        {filterData.map( (data) => {
            return (<button 
            onClick={() => filterHandler (data.title)}
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
            ${category === data.title ? "bg-opacity-60 border-white" : "opacity-40 border-transparent"}
            `} 
            key={data.id}> {data.title}</button>)
        })}
    </div>
  )
}

export default Filter;