import React from 'react'

function ArticleCard(props) {
    const { img, author, title, description } = props.dataContent;
  return (
      <div className='w-full p-4 flex-col  justify-between align-center sm:p-0 sm:w-[250px] mb-[50px]'>
          <div className='h-[200px] flex justify-center sm:block'>
              <img className='h-full w-full' src={img} alt="" srcset="" />
          </div>
          <div className='px-4  sm:px-0'>
              <p className='mt-[10px] text-sm text-grayishBlue  sm:text-start'>{ author}</p>
          <h3 className='mt-[10px] sm:text-lg text-xl  text-darkBlue  sm:text-start hover:text-limeGreen transition duration-500 ease-in-out cursor-pointer'>{title}</h3>
          <p className='mt-[10px] sm:text-lg text-xl sm:text-[14px] text-grayishBlue sm:text-start'>{ description}</p>
         </div>
    </div>
  )
}

export default ArticleCard