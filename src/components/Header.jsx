import React, { useEffect,useState } from 'react'
import './Header.css'
// import './pagination'
import Pagination from './Pagination.jsx';
import RepoPagination from './RepoPagination.jsx';

const Header = () => {
  let HTML=0,CSS=0,JavaScript=0,C=0,CPP=0,Python=0,MDX=0,Astro=0,Shell=0,SCSS=0,Rust=0,TypeScript=0,Java=0,Jupyter=0,EJS=0;
  
  const [starPage, setStarPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage]= useState(5)
  const [name,setName]=useState('');
  const [userName,setUserName]=useState('');
  const [followers,setFollowers]=useState('');
  const [following,setFollowing]=useState('');
  const [avatar,setAvatar]=useState('');
  const [userInput,setUserInput]=useState('');
  const [bio,setBio]=useState('');
  const [location,setLocation]=useState('');
  const [loading,setLoading]=useState(false);
  const [publicr,setPublicr]=useState('');
  const [publicg,setPublicg]=useState('');
  const [name1,setName1]=useState('');
  const [avatar1,setAvatar1]=useState('');
  const [followersInfo, setFollowersInfo] = useState([]);
  const [latestFollowers, setLatestFollowers] = useState([]);
  const [updatedFollowersInfo, setUpdatedFollowersInfo] = useState([]);
  const [cssper,setCssper]=useState(0);
  const per=[];
  const [topLanguages, setTopLanguages] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalRepos,setTotalRepos]= useState(0);
  const [currentRepo,setCurrentRepo]=useState([]);
  const [starredRepos,setUpdatedRepo]=useState([]);
  const [twitter,setTwitter]=useState('');



  // const [starredRepos, setStarredRepos]=useState('');
  
  const handleSearch=(e)=>{
    setUserInput(e.target.value);

  }
  const handleSeeMoreFollowers = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const lastPostIndex= currentPage* postPerPage;
  const firstPostIndex= lastPostIndex-postPerPage;
 
  const last=starPage* postPerPage;
  const first=last-postPerPage;

  const fetchi=async()=>{
    setLoading(true)
    let url1=`https://api.github.com/users/${userInput}`; 
    try{
       const response=await fetch(url1,{headers:{
        Authorization:`Bearer  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`
       },});
       const items=await response.json();
       console.log(items);
       setData(items);

      const followersResponse = await fetch(items.followers_url);
      const followersData = await followersResponse.json();
      console.log('Followers:', followersData);
      const updatedFollowersInfo = followersData.map((item) => ({
        user: item.login,
        avt: item.avatar_url,
      }));
      const currentPost=updatedFollowersInfo.slice(firstPostIndex,lastPostIndex);
      console.log('Total Posts:', updatedFollowersInfo.length);
      setTotalPosts(updatedFollowersInfo.length);
      console.log('After setting Total Posts:', totalPosts);
      setCurrentPost(currentPost);
      console.log(currentPost);
      setFollowersInfo(updatedFollowersInfo);
      setUpdatedFollowersInfo(updatedFollowersInfo)
      // setLatestFollowers(updatedFollowersInfo);

      

      const starredResponse=await fetch(`https://api.github.com/users/${userInput}/starred`);
      const starredData= await starredResponse.json();
      const starredRepos = starredData.map((item) => ({
        reponame:item.name,
        repoOwner:item.owner.login
      }));
      console.log(starredRepos);
      const currentRepo=starredRepos.slice(first,last);
      setTotalRepos(starredRepos.length);
      setCurrentRepo(currentRepo)
      setUpdatedRepo(starredRepos)


      

      const language = await fetch(items.repos_url);
      const lang = await language.json();
      console.log(lang);
      for( const lan of lang){{
        const repou=lan.url;
        const reposResponse = await fetch(`${repou}/languages`);
        const languagesData = await reposResponse.json();
        console.log('Languages:', languagesData);
        // const keys=Object.keys(languagesData);
        // console.log(keys);
        for( let i in languagesData){
          if(i=="HTML"){
            // HTML++
            const value=languagesData['HTML']
            HTML=HTML+value;
          }
          if(i=="CSS"){
            // HTML++
            const value=languagesData['CSS']
            CSS=CSS+value;
          }
          if(i=="JavaScript"){
            // HTML++
            const value=languagesData['JavaScript']
            JavaScript=JavaScript+value;
          }
          if(i=="C"){
            // HTML++
            const value=languagesData['C']
            C=C+value;
          }
          if(i=="C++"){
            // HTML++
            const value=languagesData['C++']
            CPP=CPP+value;
          }
          if(i=="Python"){
            // HTML++
            const value=languagesData['Python']
            Python=Python+value;
          }
          if(i=="MDX"){
            // HTML++
            const value=languagesData['MDX']
            MDX=MDX+value;
          }
          if(i=="Astro"){
            // HTML++
            const value=languagesData['Astro']
            Astro=Astro+value;
          }
          if(i=="Shell"){
            // HTML++
            const value=languagesData['Shell']
            Shell=Shell+value;
          }
          if(i=="SCSS"){
            // HTML++
            const value=languagesData['SCSS']
            SCSS=SCSS+value;
          }
          if(i=="Rust"){
            // HTML++
            const value=languagesData['Rust']
            Rust=Rust+value;
          }
          if(i=="TypeScript"){
            // HTML++
            const value=languagesData['TypeScript']
            TypeScript=TypeScript+value;
          }
          if(i=="Java"){
            // HTML++
            const value=languagesData['Java']
            Java=Java+value;
          }
          if(i=="Jupyter Notebook"){
            // HTML++
            const value=languagesData['Jupyter Notebook']
            Jupyter=Jupyter+value;
          }
          if(i=="EJS"){
            // HTML++
            const value=languagesData['EJS']
            EJS=EJS+value;
          }
        }
      
      }
      
      

      }
      const total=HTML+CSS+Java+JavaScript+C+CPP+Python+MDX+Astro+Shell+SCSS+Rust+TypeScript;
      
      const hper=(HTML/total)*100;
      const cssper=(CSS/total)*100;
      const jper=(Java/total)*100;
      const jsper=(JavaScript/total)*100;
      const cper=(C/total)*100;
      const cppper=(CPP/total)*100;
      const pper=(Python/total)*100;
      const mper=(MDX/total)*100;
      const aper=(Astro/total)*100;
      const sper=(Shell/total)*100;
      const scssper=(SCSS/total)*100;
      const rper=(Rust/total)*100;
      const tper=(TypeScript/total)*100;
      const juper=(Jupyter/total)*100;
      const ejsper=(EJS/total)*100;

      const languages=[
        {name:'HTML',percentage:hper},
        {name:'CSS',percentage:cssper},
        {name:'Java',percentage:jper},
        {name:'JavaScript',percentage:jsper},
        {name:'C',percentage:cper},
        {name:'C++',percentage:cppper},
        {name:'Python',percentage:pper},
        {name:'MDX',percentage:mper},
        {name:'Astro',percentage:aper},
        {name:'Shell',percentage:sper},
        {name:'SCSS',percentage:scssper},
        {name:'Rust',percentage:rper},
        {name:'TypeScript',percentage:tper},
        {name:'Jupyter',percentage:juper},
        {name:'EJS',percentage:ejsper}
      ];

      const sortedLanguages = languages.sort((a, b) => b.percentage - a.percentage);
      setTopLanguages(sortedLanguages.slice(0, 3));
      // setCssper(cssper);
      // per.push(hper,cssper,jper,jsper,cper,cppper,pper,mper,aper,sper,scssper,rper,tper,juper,ejsper);
      // console.log(per);
      // console.log("htotal=",HTML);
      // console.log("total=",total);
      // console.log(hper);
      // console.log(cssper);
      // console.log(jsper);
      // console.log(scssper);
      // console.log(sper);
      // console.log(mper);
      // console.log(tper);
      // console.log(rper);
      
    
      
      } catch(error){
        console.error(error);
      }finally{
        setLoading(false)
      }
    }
  
  const setFollowersData=({user,avt})=>{
    
    setName1(user);
    
    setAvatar1(avt);
   

  }
  
  


  
  // const hper=(HTML/total)*100;
  // const cssper=(CSS/total)*100;
  // const jper=(Java/total)*100;
  // const jsper=(JavaScript/total)*100;
  // const cper=(C/total)*100;
  // const cppper=(CPP/total)*100;
  // const pper=(Python/total)*100;
  // const mper=(MDX/total)*100;
  // const aper=(Astro/total)*100;
  // const sper=(Shell/total)*100;
  // const scssper=(SCSS/total)*100;
  // const rper=(Rust/total)*100;
  // const tper=(TypeScript/total)*100;

  // console.log(hper);
  



  const setData=({name,login,followers,following,avatar_url,bio,location,public_repos,public_gists,twitter_username})=>{
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setAvatar(avatar_url);
    setBio(bio);
    setLocation(location)
    setPublicr(public_repos)
    setPublicg(public_gists)
    setTwitter(twitter_username)
    setLatestFollowers(updatedFollowersInfo.slice(0, 10));
    

  }
  useEffect(() => {
    console.log('Header component re-rendered with currentPage:', currentPage);
    // ... (rest of the useEffect logic)
    
    console.log('Total Posts:', totalPosts);
  console.log('First Post Index:', firstPostIndex);
  console.log('Last Post Index:', lastPostIndex);
  console.log('Updated Followers Info:', updatedFollowersInfo);
    
    const currentPost=updatedFollowersInfo.slice(firstPostIndex,lastPostIndex);
    setCurrentPost(currentPost)
    console.log(currentPost);
    
  }, [currentPage]);

  useEffect(() => {
    console.log('Header component re-rendered with starpage:', starPage);
    // ... (rest of the useEffect logic)
    
    
  
    
    const currentRepo=starredRepos.slice(first,last);
    setCurrentRepo(currentRepo)
    console.log(currentRepo);
    
  }, [starPage]);
  
  
  let social=`https://twitter.com/${twitter}`;
  let media=false;
  if (twitter!=null){
    media=true;
    
  }
  

  

  return (
  <>
    <div className='head'>GITSEARCH</div>
    <div className='content'>Check out user details just by entering username !</div>
    {/* <img src={avatar} alt="" />
    <h3>{name}</h3>
    <h3>{userName}</h3>
    <h3>{followers}</h3>
    <h3>{following}</h3> */}
    
    <form action="">
      <input className='input1' type="text" placeholder='username' onChange={handleSearch} />
    </form>
    <br />
    <button className='btn' onClick={fetchi}>Search</button>
    <br />
    {loading ?(
      <div className="loader"></div>
    ): name ?(
    <><div className='slideContent'>
            <div className="slideWrapper">
              <div className="card">
                <div className="imageContent">
                  <div className="cardImage">
                    <img className="cardImg" src={avatar} alt="" />
                  </div>
                </div>
                <div className="cardContent">
                  <h2 className='name'>NAME: {name}</h2>
                  <br />

                  <div className="description">USERNAME: {userName}</div>
                  <br />
                  <div className="description">FOLLOWERS: {followers}</div>
                  <br />
                  <div className="description">FOLLOWING: {following}</div>
                  <br />
                  <div className="description">BIO: {bio}</div>
                  <br />
                  <div className="description">LOCATION: {location}</div>
                  <br />
                  <div className="description">PUBLIC REPOS: {publicr}</div>
                  <br />
                  <div className="description">PUBLIC GISTS: {publicg}</div>
                  <br />
                  {media?(<a   target="_blank" className="description" href={social}>TWITTER ACCOUNT</a>):'TWITTER ACCOUNT:NA'}
                  
                  
                  
                  
                  <div className="description">{name1}</div>

                  <div className="description">{avatar1}</div>
                  <br />
                  <div className='description'>
                    TOP THREE LANGUAGES:
                    <br />
                    {topLanguages.map((language, index) => (
                      <div key={index}>
                        {`${index + 1}. ${language.name}: ${language.percentage.toFixed(2)}%`}
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
      <div className='followerrow'>
        <p className='list'>FOLLOWER LIST</p>
    {currentPost.map((follower, index) => (
      
      <div key={index} className='follower'>

        <p className='followerName'><span className='repoName'>User:</span> <br/>{follower.user}</p>
        <img className="followerImg" src={follower.avt} alt={`avatar-${index}`} />
      </div>
    ))}
    </div>
    
    
    
  
      
            <Pagination
              totalPosts={totalPosts}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
              updatedFollowersInfo={updatedFollowersInfo}
            />
    <div className='followerrow'>
    <p className='list'>STARRED REPOS</p>
        
        {currentRepo.map((repo, index) => (
          
          <div key={index} className='follower'>
            <p className='followerName'><span className='repoName'>Repo Name:</span> <br/>{repo.reponame}</p>
            <p className='followerName'><span className='repoName'>Repo Name:</span> <br/>{repo.repoOwner}</p>
            
          </div>
        ))}
        
        </div>
        <RepoPagination
              totalRepos={totalRepos}
              postPerPage={postPerPage}
              setStarPage={setStarPage}
              starredRepos={starredRepos}
        />
          
    
    
    
    

    </>


      
    ):'User not found'}
        {/* <div>
        <h3></h3>
        <div className='followerrow'>
        {followersInfo.map((follower, index) => (
          <div key={index} className='follower'>
            <p className='followerName'>User: <br/>{follower.user}</p>
            <img className="followerImg"src={follower.avt} alt={`avatar-${index}`} />
          </div>
        ))}
        <button className='all'>See all followers</button>
        </div>
        
      </div> */}

    
  
  </>

    
  )
}

export default Header