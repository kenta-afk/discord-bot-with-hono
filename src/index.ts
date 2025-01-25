import { helloCommand } from './commands/hello';
import { helpCommand } from './commands/help';
import { omikujiCommand } from './commands/omikuji';
import { deleteSelfComponent } from './components/deleteSelfComponent';
import { omikujiComponent } from './components/omikujiComponent';
import { DiscordHono } from 'discord-hono';


const app = new DiscordHono()
  .command('hello', helloCommand)
  .command('help', helpCommand)
  .command('omikuji', omikujiCommand)
  .component('delete-self', deleteSelfComponent)
  .component('omikujiStart', omikujiComponent)
  



export default app;