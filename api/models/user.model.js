import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique: true
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        password:{
            type:String,
            required:true
        },
        avatar:{
            type:String,
            default:"https://in.images.search.yahoo.com/images/view;_ylt=Awrx_xlFdK1me1scAGG9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzJiOWI1MmFjMWY3YWQ4MjgxNjQ1N2FlMDVhOTg3MjhjBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dempty%2Bprofile%2Bphoto%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=1920&h=1920&imgurl=static.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F534%2F006%2Foriginal%2Fsocial-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg&rurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F2534006-social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background&size=24.8KB&p=empty+profile+photo&oid=2b9b52ac1f7ad82816457ae05a98728c&fr2=piv-web&fr=mcafee&tt=Social+Media+Chatting+Online+Blank+Profile+Picture+Head+And+Body+Icon+...&b=0&ni=21&no=3&ts=&tab=organic&sigr=ysToeXmMsjx2&sigb=8KUFmLcE0olh&sigi=KBVyeUSFrMsY&sigt=ch3OsMsqRaPk&.crumb=YY/zH6NmTqb&fr=mcafee&fr2=piv-web&type=E210IN826G0"
        },

    },{timestamp:true}
)
const User=mongoose.model('User',userSchema); //creating model
export default User; //so that we can use this model anywhere else in our application