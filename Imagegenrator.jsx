
import React,{useRef,useState} from 'react';
import './Imagegenrator.css'
import  AI_image from '../Assets/Ai_image.jpg';
import AI_image2 from '../Assets/AI_image2.png';

const Imagegenrator = () => {
    
    const[image_url,setImage_url] = useState("/")
    let inputRef = useRef(null)

    const imagegenrator = async () =>{
        if(inputRef.current.value===""){
            return 0;

        }
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer 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",
                "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n:1,
                    size:"1512x1512"
                })
            }
            
        );
        let data = await response.json()
        console.log(data);
        let data_array = data.data;
        setImage_url(data_array[0].url)
    }
  
    return (
        <>
        <section className='image-generator'>
            <div className="content">
                <h1>Text To Image AI Website</h1>
                <p>Convert Your Text into Amazing images with Codetech With RP</p>
        <div className="search-box">
            <input type="text"  ref={inputRef} className='search-input' placeholder='Enter your text here...' />
            <button className="generate-btn" onClick={()=>{imagegenrator()}}>Click Here</button>
        </div>
     
            </div>
        </section>
    <div className='ai_image_genrator'>
        <div className="img_loading">
            <div className="image"><img src={image_url==="/"?AI_image2:image_url}></img></div>
            
        </div>
       <footer>
        <a href="#">@CopyRight CodeTech With RP</a>

       </footer> 
     </div>
        </>
    )
    



}

export default Imagegenrator
