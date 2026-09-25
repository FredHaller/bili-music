import Filter from "./filter";

export default function Songlist() {
  return (
    <div class="gap-4 h-full grid grid-rows-[auto_1fr_auto] ">
      <Filter />
      
      <ul class="list bg-base-100 rounded-box shadow-md w-full min-h-0 overflow-y-auto">
        
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
        
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
          <div class="list-col-grow">
            <div>Dio Lupa</div>
            <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
          <div class="list-col-grow">
            <div>Ellie Beilish</div>
            <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
          <div class="list-col-grow">
            <div>Sabrino Gardener</div>
            <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Dio Lupa</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Ellie Beilish</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Sabrino Gardener</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
        <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Dio Lupa</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Ellie Beilish</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Sabrino Gardener</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>       
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
          <div class="list-col-grow">
            <div>Dio Lupa</div>
            <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
          <div class="list-col-grow">
            <div>Ellie Beilish</div>
            <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
          <div class="list-col-grow">
            <div>Sabrino Gardener</div>
            <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Dio Lupa</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Ellie Beilish</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Sabrino Gardener</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
        <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Dio Lupa</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Ellie Beilish</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Sabrino Gardener</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>       
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
          <div class="list-col-grow">
            <div>Dio Lupa</div>
            <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
          <div class="list-col-grow">
            <div>Ellie Beilish</div>
            <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
          <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
          <div class="list-col-grow">
            <div>Sabrino Gardener</div>
            <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
        <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Dio Lupa</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Ellie Beilish</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Sabrino Gardener</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
        <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Dio Lupa</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Ellie Beilish</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
                <li class="list-row">
                  <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
                  <div><img class="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                  <div class="list-col-grow">
                    <div>Sabrino Gardener</div>
                    <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                  </div>
                  <button class="btn btn-square btn-ghost">
                    <svg aria-label="Play" class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                  </button>
                </li>
                
      </ul>
      <div class="join justify-center">
        <button class="join-item btn">«</button>
        <button class="join-item btn btn-active">2</button>
        <button class="join-item btn">3</button>
        <button class="join-item btn">4</button>
        <button class="join-item btn">»</button>
      </div> 
    </div>
  );
}