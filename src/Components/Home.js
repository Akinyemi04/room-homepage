import React, { useEffect } from 'react'
import img2 from  './images/image-about-light.jpg'
import img1 from './images/image-about-dark.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EastIcon from '@mui/icons-material/East';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector,useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { animate } from '../store';
const Home = () => {
    const display_array = useSelector((val)=>{
        return val.data.view_data
    })
    const desktop_array = useSelector((val)=>{
        return val.data.desktop_array
    })
    const mobile_array = useSelector((val)=>{
        return val.data.mobile_array
    })
    const show_array = useSelector((val)=>{
        return val.data.display
    })
    const number = useSelector((val)=>{
        return val.data.number
    })
    const css = useSelector((val)=>{
        return val.data.css_style_nav
    })
    const opacity = useSelector((val)=>{
        return val.data.opacity
    })
    const dispatch = useDispatch()
    useEffect(()=>{
        if(window.screen.availWidth > 500){
            dispatch(animate.set(desktop_array))
            dispatch(animate.changeCss('inline-block'))
        }
        else{
            dispatch(animate.set(mobile_array))
            dispatch(animate.changeCss('none'))
        }
    },[desktop_array,dispatch,mobile_array])
    function left(){
        if (number > 0){
            dispatch(animate.changeOpacity(0))
            setTimeout(()=>{
                dispatch(animate.subtract())
                dispatch(animate.changeOpacity(1))
            },[250])
        }
    }
    function right(){
        if(number <2){
            dispatch(animate.changeOpacity(0))
            setTimeout(()=>{
                dispatch(animate.add())
                dispatch(animate.changeOpacity(1))
            },[250])
        }
    }
  return (
    <div className='home'>
        <section>
            <img style={{opacity:opacity}} src={show_array[number]} alt="" />
            <header>
                <span className='hidden' onClick={()=>{
                    dispatch(animate.changeCss('inline-block'))
                }} ><MenuIcon/></span>
                <span className='logo'>room</span>
                <nav style={{display:css}}>
                    <span style={{color:'rgb(138, 136, 132)'}} className='hidden'onClick={()=>{
                        dispatch(animate.changeCss('none'))
                    }}><ClearIcon/></span>
                    <span>home</span>
                    <span>shop</span>
                    <span>about</span>
                    <span>contact</span>
                </nav> 
            </header>
        </section>
        <aside  >
            <h1 style={{opacity:opacity}}>{display_array[number].header}</h1>
            <div style={{opacity:opacity}}>
                {display_array[number].content}
            </div>
            <p className='east'><span>SHOP NOW</span><EastIcon className ='corn'/></p>
            <div className='float'>
                <span onClick={left}>
                    <ArrowBackIosIcon/>
                </span>
                <span onClick={right}><ArrowForwardIosIcon/></span>
            </div>
        </aside>
        <img src={img1} alt="" />
        <div className='fourth'>
            <h2>ABOUT OUR FURNITURE</h2>
            <main>
                Our multifunctional collection blends design and function to suit your individual taste.Make each room unique,or pick a cohesive theme that best express your interests and what inspires you.Find the furniture pieces you need,from traditional to comtemporary styles or nything in between.Product specialists are available to help you create your dream space.
            </main>
        </div>
        <img src={img2} alt="" />
    </div>
  )
}

export default Home