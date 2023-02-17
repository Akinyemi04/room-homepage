import {configureStore, createSlice} from '@reduxjs/toolkit'
import img1 from '../Components/images/desktop-image-hero-1.jpg'
import img2 from '../Components/images/desktop-image-hero-2.jpg'
import img3 from '../Components/images/desktop-image-hero-3.jpg'
import imgs1 from '../Components/images/mobile-image-hero-1.jpg'
import imgs2 from '../Components/images/mobile-image-hero-1.jpg'
import imgs3 from '../Components/images/mobile-image-hero-1.jpg'
const mainSlice = createSlice({
    name:"main",
    initialState:{
        desktop_array:[img1,img2,img3],
        mobile_array:[imgs1,imgs2,imgs3],
        number:0,
        display:[img1,img2,img3],
        css_style_nav:'none',
        view_data:[{
            header:'Discover innovative ways to decorate',
            content:'We provide unmatched quality,comfort,and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what youy love.'
        },
        {
            header:'We are available all across the globe',
            content:"With stores all over the world,it's easy for you to find furniture for your home or place of business.Locally, we're in most major cities throughout the country.Find the branch nearest you using our store locator,Any questions?Don't hesitate to contact us today. "
        },
        {
            header:'Manufactured with the best materials',
            content:'Our modern furniture store provide a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry,we understand what customers wqant for their home and office'
        }
    ]
    },
    reducers:{
        set(state,action){
            return{
                ...state,
                display:action.payload
            }
        },
        add(state){
            return{
                ...state,
                number:state.number+1
            }
        },
        subtract(state){
            return{
                ...state,
                number:state.number-1
            }
        },
        changeCss(state,action){
            return{
                ...state,
                css_style_nav:action.payload
            }
        }
    }
})

export const animate = mainSlice.actions
const store = configureStore({reducer:{
    data:mainSlice.reducer,

}})
export default store