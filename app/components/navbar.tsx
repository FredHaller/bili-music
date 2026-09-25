export default function Navbar() {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-none">
        <img
          src="logo_dark.png"
          alt="logo"
          class="m-4 h-10 w-10 stroke-current"
        ></img>
      </div>
      <div class="flex-1">
        <a class="text-2xl">MeUmy的录音棚</a>
      </div>
      <div class="flex-none">
        <button class="mx-2 btn btn-soft btn-primary">导入</button>
        <button class="mx-2 btn btn-soft btn-secondary">导出</button>
      </div>
    </div>
  );
}
