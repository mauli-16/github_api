import React from 'react'

const Pagination = ({totalPosts,postPerPage,setCurrentPage,updatedFollowersInfo}) => {
    console.log(updatedFollowersInfo);
    console.log('hi');
    console.log(totalPosts);
    let pages=[];
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pages.push(i);
    }
    console.log(pages);
  return (
    <div className='pagi'>
        {pages.map((page,index)=>{
            return <button key={index} onClick={()=>{setCurrentPage(page) ;
                console.log('Page changed to:', page)}}>
                    {page}
                    </button>
        })}
    </div>
  )
}

export default Pagination