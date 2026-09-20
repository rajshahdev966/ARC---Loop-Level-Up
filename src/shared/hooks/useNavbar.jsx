import { useSelector } from "react-redux";

const useNavbar = ()=>{
    const { handle, archetype } = useSelector((store) => store.auth);
    const NAV_ITEMS = [
  { id: "vision-board", label: "Vision Board", path: "/main" },
  { id: "sticky-wall", label: "Sticky Wall", path: "/main/sticky" },
  { id: "your-wrapped", label: "Your Wrapped", path: "/main/wrapped" },
];
    return {
        NAV_ITEMS, handle, archetype
    }
}
export default useNavbar;