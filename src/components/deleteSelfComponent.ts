import { ComponentContext } from 'discord-hono';

export const deleteSelfComponent = (c: ComponentContext) => {
    return c.resDeferUpdate(c.followupDelete);
};