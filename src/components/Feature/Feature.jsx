import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-3"><FaCircleCheck className="text-green-500"></FaCircleCheck>{feature}</p>
        </div>
    );
};

export default Feature;