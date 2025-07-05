import { MdKeyboardArrowRight } from "react-icons/md";
const BlockButton=(props)=>{
    return (
        <>
        <button className="block-button">
            {props.children} <MdKeyboardArrowRight />
        </button>
        </>
    )
}
export default BlockButton;