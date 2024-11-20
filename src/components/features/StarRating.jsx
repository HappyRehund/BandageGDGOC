import { MdOutlineStar, MdOutlineStarBorder, MdOutlineStarHalf } from "react-icons/md";


const StarRating = ({rating}) => {
    return (
        <div className="flex gap-0.5 text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => {
                if (index < Math.floor(rating)) {
                    return <MdOutlineStar key={index} />;
                } else if (index < rating) {
                    return <MdOutlineStarHalf key={index} />;
                } else {
                    return <MdOutlineStarBorder key={index} />;
                }
            })}
        </div>
    );
};

export default StarRating;
