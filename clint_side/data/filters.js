import All from "../myComponents/filter/active/all";
import Chair from "../myComponents/filter/light_mode/chair";
import Cupboard from "../myComponents/filter/light_mode/cupboard";
import Lamp from "../myComponents/filter/light_mode/lamp";

const filters = [
    {
        id: 1,
        element: <All />
    },
    {
        id: 2,
        element: <Chair />
    },
    {
        id: 3,
        element: <Cupboard />
    },
    {
        id: 4,
        element: <Lamp />
    }
]

export default filters;