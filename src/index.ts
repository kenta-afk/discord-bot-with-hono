import { helloCommand } from './commands/helloCommand';
import { helpCommand } from './commands/helpCommand';
import { deleteSelfComponent } from './components/deleteSelfComponent';
import { DiscordHono } from 'discord-hono';


const app = new DiscordHono()
  .command('hello', helloCommand)
  .command('help', helpCommand)
  .component('delete-self', deleteSelfComponent)
  



export default app;