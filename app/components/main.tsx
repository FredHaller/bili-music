import Playlist from "./playlist";
import Songlist from "./songlist";
import Filter from "./filter";

export default function Main() {
  return (
    <div class="grid grid-cols-[1fr_3fr] grid-rows-1 gap-6 m-4 min-h-0 overflow-y-auto">
        <Playlist />
        <Songlist />
    </div>
  );
}