import { CommandContext } from 'discord-hono';

export const helloCommand = (c: CommandContext) => {
    return c.res('world!');
};