import { useEffect } from "react";
import gsap from "gsap";

export default function useOrbitAnimation(
outerRef,
middleRef
){

useEffect(()=>{

if(!outerRef.current||!middleRef.current)return;

const ctx=gsap.context(()=>{

gsap.to(outerRef.current,{
rotation:360,
duration:40,
ease:"none",
repeat:-1,
transformOrigin:"50% 50%",
});

gsap.to(middleRef.current,{
rotation:-360,
duration:28,
ease:"none",
repeat:-1,
transformOrigin:"50% 50%",
});

gsap.to(
outerRef.current.querySelectorAll(".orbit-icon"),
{
rotation:-360,
duration:40,
repeat:-1,
ease:"none",
}
);

gsap.to(
middleRef.current.querySelectorAll(".orbit-icon"),
{
rotation:360,
duration:28,
repeat:-1,
ease:"none",
}
);

});

return()=>ctx.revert();

},[]);

}