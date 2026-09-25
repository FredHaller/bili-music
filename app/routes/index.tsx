import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'
import Navbar from '../components/navbar'
import Main from '../components/main'


export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <div class="font-display h-dvh grid grid-rows-[auto_1fr_auto]">
      <title>MeUmy的录音棚</title>
      <Navbar />
      <Main />
      {/*<h1 class="text-3xl font-bold">Hello, {name}!</h1>
      <Counter />*/}
    </div>
  )
})
