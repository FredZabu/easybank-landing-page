import React from 'react';
import { articleData } from '../data/articleData';
import { ArticleCard } from '../components';

function Articles() {
  return (
     <div className='sm:w-[100%] z-50 mt-[50px] sm:mt-[100px]'>
    <div className='sm:w-[80%]  sm:mt-[50px] ml-auto mr-auto mb-[20px]'>
      <div className='sm:w-[50%] p-4 sm:p-0'>
        <h1 className='text-4xl text-darkBlue text-center sm:text-start'>Latest Articles</h1>
      </div>
      <div className='flex flex-col flex-col-reverse sm:flex-row justify-between items-start mt-[20px] sm:mt-[40px]'>
        {articleData.map((item, index) => {
          return <ArticleCard dataContent={item} key={`${item.author} ${index}`} />
        }) }
      </div>
      </div>
      </div>
  )
}

export default Articles