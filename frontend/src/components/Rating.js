import React from 'react'
import { Badge } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
export default function Rating({ rating, numberofrating }) {

    return (
        <div className='rating'>

            {rating >= 1 ? <FaStar /> : rating >= .5 ? <FaStarHalfAlt /> : <FaRegStar />}
            {rating >= 2 ? <FaStar /> : rating >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            {rating >= 3 ? <FaStar /> : rating >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            {rating >= 4 ? <FaStar /> : rating >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            {rating >= 5 ? <FaStar /> : rating >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            <h6 className='numberofrating'>
                Rating <Badge className='ratingBg'  bg="primary">
                    {numberofrating}
                </Badge>
            </h6>


            {/* <FaStar /> */}
            {/* <FaStarHalfAlt />
            <FaRegStar /> */}
        </div>
    )
}
