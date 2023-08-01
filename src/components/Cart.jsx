import { useState } from "react";

function Cart() {
    
    const [isClicked, setIsClicked] = useState(false)
    const handleisClickedChange = () => {
        if (isClicked === false) {
            setIsClicked(true)
        } else {
            setIsClicked(false)
        }
    }

    return ( <>
    
    <button className="relative" onClick={handleisClickedChange}>

        Cart
        {isClicked && 
        <div className="absolute w-full 
                        bg-yellow-500
                        
        ">
            hello world
        </div> 
        } 
        
        </button>
    
    </> );
}

export default Cart;<>

<button>Cart</button>

</>