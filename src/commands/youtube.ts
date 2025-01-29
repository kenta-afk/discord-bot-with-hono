import { CommandContext } from "discord-hono";

export const youtubeCommand = (c: CommandContext) => {
    return c.res('https://www.youtube.com/@coachjoji/videos');
}