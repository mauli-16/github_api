import React from 'react'

const RepoPagination = ({totalRepos,postPerPage,setStarPage}) => {
    let starredRepos=[];
    for(let i=1;i<=Math.ceil(totalRepos/postPerPage);i++){
        starredRepos.push(i);
    }
  return (
    <div className='pagi'>
    {starredRepos.map((star,index)=>{
        return <button key={index} onClick={()=>{setStarPage(star) ;
            console.log('Page changed to:', star)}}>
                {star}
                </button>
    })}
</div>
  )
}

export default RepoPagination


