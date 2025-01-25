import { CommandContext, Components, Button } from 'discord-hono';

export const helpCommand = (c: CommandContext) => {
    return c.res({
        content: `text: ${c.var.text}`,
        components: new Components().row(
            new Button('https://discord-hono.luis.fun', ["📑", 'Docs'], 'Link'),
            new Button('delete-self', ['🗑️', 'Delete'], 'Secondary'),
        ),
    });
};