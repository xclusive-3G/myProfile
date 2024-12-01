export const bounceUp = (duration, stiffness)=>{
    return{
        hidden:{
            y:120,
            opacity:0
        },
        show:{
            y:0,
            opacity:1,
            transition:{
                type:'spring',
                duration:duration,
                stiffness:stiffness
            }
        }
    }
}