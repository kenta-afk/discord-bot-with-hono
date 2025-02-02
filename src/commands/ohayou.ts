import { CommandContext } from "discord-hono";

export const ohayouCommand = (c: CommandContext) => {
    return c.res({
        content: 'おっ！　おはよう(^^)~~~~...............お前ふざけてんの？',
    });
}