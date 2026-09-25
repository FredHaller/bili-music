export default function Filter() {
  return (
    <div class="flex gap-4 justify-start w-full ">
      <label class="input">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" class="grow" placeholder="Search" />
        <kbd class="kbd kbd-sm">⌘</kbd>
        <kbd class="kbd kbd-sm">K</kbd>
      </label>

      <select class="select">
        <option disabled selected>Pick a color</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
        <form class="filter flex-nowrap">
          <input class="btn" type="checkbox" name="frameworks" aria-label="Svelte"/>
          <input class="btn" type="checkbox" name="frameworks" aria-label="Vue"/>
          <input class="btn" type="checkbox" name="frameworks" aria-label="React"/>
          <input class="btn btn-square" type="reset" value="×"/>
        </form>
    </div>
  );
}