import React, { useEffect,useState } from 'react'
import './Header.css'

const Header = () => {
  let HTML=0,CSS=0,JavaScript=0,C=0,CPP=0,Python=0,MDX=0,Astro=0,Shell=0,SCSS=0,Rust=0,TypeScript=0,Java=0,Jupyter=0,EJS=0;

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
  
  const handleSearch=(e)=>{
    setUserInput(e.target.value);

  }

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
      setFollowersInfo(updatedFollowersInfo);

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
      console.log("htotal=",HTML);
      console.log("total=",total);
      console.log(hper);
      console.log(cssper);
      console.log(jsper);
      console.log(scssper);
      console.log(sper);
      console.log(mper);
      console.log(tper);
      console.log(rper);
      
    
      
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
  



  const setData=({name,login,followers,following,avatar_url,bio,location,public_repos,public_gists})=>{
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setAvatar(avatar_url);
    setBio(bio);
    setLocation(location)
    setPublicr(public_repos)
    setPublicg(public_gists)
    

  }
  

  return (
  <>
    <div className='head'>GITSEARCH</div>
    <p className='content'>Check out user details just by entering username !</p>
    {/* <img src={avatar} alt="" />
    <h3>{name}</h3>
    <h3>{userName}</h3>
    <h3>{followers}</h3>
    <h3>{following}</h3> */}
    
    <form action="">
      <input type="text" placeholder='name' onChange={handleSearch} />
    </form>
    <br />
    <button onClick={fetchi}>Search</button>

    {loading ?(
      <div className="loader"></div>
    ): name ?(
    <div className='slideContent'>
    <div className="slideWrapper">
      <div className="card">
        <div className="imageContent">
          <div className="cardImage">
            <img  className="cardImg"src={avatar} alt="" />
          </div>
        </div>
        <div className="cardContent">
          <h2 className='name'>{name}</h2>
          <br />
          <div className="description">{userName}</div>
          <br />
          <div className="description">{followers}</div>
          <br />
          <div className="description">{following}</div>
          <br />
          <div className="description">{bio}</div>
          <br />
          <div className="description">{location}</div>
          <br />
          <div className="description">{publicr}</div>
          <br />
          <div className="description">{publicg}</div>
          <br />
          <div className="description">{name1}</div>
          <br />
          <div className="description">{avatar1}</div>
          <br />
        </div>
      </div>
    </div>
    </div>):(
      <div>data not available</div>
    )}
        <div>
        <h3>Followers Info:</h3>
        {followersInfo.map((follower, index) => (
          <div key={index}>
            <p>User: {follower.user}</p>
            <img src={follower.avt} alt={`avatar-${index}`} />
          </div>
        ))}
      </div>
    
  
  </>

    
  )
}

export default Header