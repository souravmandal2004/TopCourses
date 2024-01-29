import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";


function Card(props) {
    
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler () {
        if (likedCourses.includes(course.id))
        {
            // Pehle se like hua pada hua h
            setLikedCourses ( (prev) => prev.filter ( (cid) => cid !== course.id));
            toast.warning("Liked Removed");
        }
        else 
        {
            // Pehle se liked nhi h
            // insert krna h ye course , liked courses me
            if (likedCourses.length === 0)
            {
                setLikedCourses ([course.id]);
            }
            else 
            {
                setLikedCourses ( (prev) => [...prev, course.id]);
            }
            toast.success ("Liked Successfully");
        }
    }

  return (
    <div className='w-[300px] bg-[#292A43] rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} loading='lazy' />
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-3 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        !likedCourses.includes (course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>

        <div className='p-4 '>
            <p className='text-white font-semibold text-lg leading-6'> {course.title} </p>
            <p className='text-white mt-2'> 
            {
                course.description.length > 100 ? (course.description.substr (0,100)) + "..." : (course.description)
            }
            </p>
        </div>
    </div>
  )
}

export default Card