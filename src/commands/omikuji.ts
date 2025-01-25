import { CommandContext, Components, Button } from "discord-hono";

export const omikujiCommand = (c: CommandContext) => {
    return c.res({
        content: 'Kind Words From jo-ji',
        components: new Components().row(
            new Button('omikujiStart', ['🎰', 'ありがたい言葉を受け取る'], 'Primary'),
            new Button('delete-self', ['🗑️', 'Delete'], 'Secondary'),
        ),
    });
}